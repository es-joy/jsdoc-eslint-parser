/* eslint-disable unicorn/prefer-structured-clone -- JSON desired here */
import {SourceCode} from 'eslint';
import esquery from 'esquery';
import {
  jsdocVisitorKeys, jsdocTypeVisitorKeys,
  getJSDocComment,
  parseComment, commentParserToESTree
  /* eslint-disable import/no-unresolved -- Bug? */
} from '@es-joy/jsdoccomment';
/* eslint-enable import/no-unresolved -- Bug? */

const jsdocCommentProperty = 'jsdoc';
const jsdocBlocksProperty = 'jsdocBlocks';

/**
 * @typedef {import('@es-joy/jsdoccomment').JsdocBlock & {
 *   loc: import('estree').SourceLocation,
 *   range: [number, number],
 *   commentsIndex: number
 * }} JsdocBlockEnhanced
 */

/**
 * @callback TraverseCallback
 * @param {import('estree').Node & {
 *   parent?: import('estree').Node & {
 *      parent?: import('estree').Node
 *   }
 *   jsdoc?: import('@es-joy/jsdoccomment').JsdocBlock|null
 * }} node
 * @param {import('estree').Node} parent
 * @returns {void}
 */

/* eslint-disable jsdoc/reject-any-type -- Needed */
/**
 * @typedef {any} AnyObject
 */
/* eslint-enable jsdoc/reject-any-type -- Needed */

/* eslint-disable jsdoc/reject-any-type -- Babel doesn't specify */
/**
 * @typedef {{
 *   mode?: "jsdoc"|"closure"|"typescript",
 *   maxLines?: number,
 *   minLines?: number,
 *   indent?: string,
 *   throwOnTypeParsingErrors?: boolean
 *   sourceType?: "script"|"module",
 *   babelOptions?: any
 * }} Options
 */
/* eslint-enable jsdoc/reject-any-type -- Babel doesn't specify */

/**
 * @param {AnyObject} obj
 */
const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * @param {(
 *   code: string,
 *   options: Options
 * ) => import('eslint').Linter.ESLintParseResult} parser
 * @param {{
 *   mode?: "jsdoc"|"closure"|"typescript"
 * }} bakedInOptions
 */
const getJsdocEslintParser = (parser, bakedInOptions = {}) => {
  /**
   * @param {string} code
   * @param {Options} options
   */
  return function (code, options = {}) {
    const {
      mode = bakedInOptions.mode || 'jsdoc',
      maxLines = 1,
      minLines = 0,
      indent = '',
      throwOnTypeParsingErrors = false,
      sourceType,
      babelOptions,
      ...parserOptions
    } = options;

    // console.log('options', options, code);
    const {ast, scopeManager, visitorKeys} = parser(code, {
      // Grab if not within `babelOptions`
      sourceType,
      ...babelOptions,
      ...parserOptions,
      ...bakedInOptions

      // These would be needed by the regular Babel parser, but apparently
      //   this Babel ESLint parser properly adds them for us:
      // Required by ESLint on `Program`
      // tokens: true,
      // Required by ESLint on each Node
      // ranges: true
    });

    const modifiedVisitorKeys = JSON.parse(JSON.stringify(visitorKeys));
    Object.entries(modifiedVisitorKeys).forEach(([key, value]) => {
      if (key === 'Program') {
        modifiedVisitorKeys[key] = Array.isArray(value)
          ? [jsdocBlocksProperty, ...value]
          /* c8 ignore next 1 */
          : [jsdocBlocksProperty];
      } else {
        modifiedVisitorKeys[key] = Array.isArray(value)
          ? [jsdocCommentProperty, ...value]
          /* c8 ignore next 1 */
          : [jsdocCommentProperty];
      }
    });

    const newVisitorKeys = {
      ...modifiedVisitorKeys,
      ...jsdocVisitorKeys,
      ...jsdocTypeVisitorKeys
    };

    // Todo: Expose comment or type parsing utilities?
    const parserServices = {
      /*
      foo () {
        // eslint-disable-next-line no-console -- Testing
        console.log('test');
      }
      */
    };

    // Filed https://github.com/jsdoctypeparser/jsdoctypeparser/issues/139
    //  and commented at https://github.com/syavorsky/comment-parser/issues/99
    //  regarding jsdoctypeparser and comment-parser supporting this AST
    //  out of the box

    // Todo: Should really be building this as building AST rather than
    //   traversing and running on each node
    const sourceCode = new SourceCode(
      {
        ast,
        scopeManager,
        visitorKeys,
        text: code,
        parserServices
      }
    );

    const sel = esquery.parse('*[type]');

    /**
     * @type {{[key: string]: boolean}}
     */
    const takenRanges = {};

    esquery.traverse(
      ast,
      sel,
      /** @type {TraverseCallback} */
      (node, parent) => {
        // `parent` not available by default, so we add; must be
        //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
        node.parent = parent;

        // Have must `range` and `loc` per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
        // We've specified `ranges` above and seem to be getting `loc` set.
        // const [start, end] = node.range;
        // node.loc = {start: {line: 0}, end: {line: 0}};
        // node.loc = {start: {line: start}, end: {line: end}};

        let commentAST = null;
        if (node.type !== 'Program' && !node.type.startsWith('Jsdoc')) {
          let commentToken =
            /**
             * @type {import('@es-joy/jsdoccomment').Token & {
             *   loc: import('estree').SourceLocation
             * }|null}
             */ (getJSDocComment(
              sourceCode,
              // @ts-expect-error Ok
              node,
              {
                minLines,
                maxLines
              }
            ));

          /**
           * @type {(import('estree').Node & {
           *   parent?: import('estree').Node
           * })|undefined}
           */
          let ancestor = parent;
          do {
            if (ancestor.type === 'Program') {
              break;
            }
            const ancestorCommentToken = getJSDocComment(
              sourceCode,
              // @ts-expect-error Ok
              ancestor,
              {
                minLines,
                maxLines
              }
            );

            if (ancestorCommentToken && ancestorCommentToken === commentToken) {
              // Ancestor has handled instead
              commentToken = null;
              break;
            }

            ancestor = ancestor.parent;
          } while (ancestor);

          if (
            commentToken && commentToken.range && 'loc' in commentToken &&
            commentToken.loc && 'start' in commentToken.loc
          ) {
            // Note: When there is no end line (it is inline), the `initial` of
            //   the comment, could be too long, so we can't just repeat solely
            //   based on the start column
            const idx = commentToken.range[0];
            // We could also add to the Comment AST to suggest a line should be
            //   stringified with line breaks (even if only a single line), if
            //   it occurs on its own line (the start.column (and end.column))
            //   have nothing before or after.
            const indnt = sourceCode.getText().slice(
              idx - commentToken.loc.start.column, idx
            ).match(/\s+$/u)?.[0] || '';

            const jsdoc = parseComment(
              commentToken,
              indnt
            );
            commentAST =
              /**
               * @type {import('@es-joy/jsdoccomment').JsdocBlock & {
               *   loc: import('estree').SourceLocation,
               *   range: [number, number]
               * }}
               */ (commentParserToESTree(jsdoc, mode, {
                throwOnTypeParsingErrors
              }));
            commentAST.loc = clone(commentToken.loc);
            commentAST.range = clone(commentToken.range);

            takenRanges[String(commentToken.range)] = true;

            esquery.traverse(
              // @ts-expect-error Bug
              commentAST,
              sel,
              /** @type {TraverseCallback} */
              (_node, parent) => {
                // `parent` not available by default, so we add; must be
                //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
                _node.parent = parent;

                // For now, we are just fudging these by using the comment
                //   block's location
                _node.loc = clone(commentToken?.loc);
                _node.range = clone(commentToken?.range);
              }, {visitorKeys: newVisitorKeys}
            );
          }
        }

        if (node.type !== 'Program' && !node.type.startsWith('Jsdoc')) {
          node[jsdocCommentProperty] = commentAST;
        }
      }, {visitorKeys: newVisitorKeys}
    );

    if (ast.comments) {
      /**
       * @type {import('eslint').AST.Program & {
       *   jsdocBlocks: (JsdocBlockEnhanced|null)[]
       * }}
       */
      (ast)[jsdocBlocksProperty] = ast.comments.map(({
        type, value: comment, range, loc
      }, idx) => {
        if (type !== 'Block' || takenRanges[String(range)]) {
          return null;
        }
        let jsdoc;
        try {
          // Todo: detect leading whitespace for indent argument?
          jsdoc = parseComment({value: comment}, indent);
          // No longer possible here?
          /* c8 ignore next 3 */
          if (!jsdoc) {
            return null;
          }
        // Unreachable?
        /* c8 ignore next 3 */
        } catch (err) {
          return null;
        }
        const commentAST =
          /**
           * @type {JsdocBlockEnhanced}
           */ (commentParserToESTree(jsdoc, mode, {
            throwOnTypeParsingErrors
          }));

        commentAST.loc = clone(loc);
        commentAST.range = clone(range);
        commentAST.commentsIndex = idx;

        esquery.traverse(
          // @ts-expect-error Bug
          commentAST,
          sel,
          /** @type {TraverseCallback} */
          (node, parent) => {
            // `parent` not available by default, so we add; must be
            //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
            node.parent = parent;

            // For now, we are just fudging these by using the comment block's
            //   location
            node.loc = clone(loc);
            node.range = clone(range);
          }, {visitorKeys: newVisitorKeys}
        );

        return commentAST;
      }).filter(Boolean);
    }

    // console.log('modifiedVisitorKeys', modifiedVisitorKeys);
    // console.log('ast', ast.jsdoc.tags[0]);

    return {
      ast,
      services: parserServices,
      scopeManager,
      visitorKeys: newVisitorKeys
    };
  };
};

export default getJsdocEslintParser;
