import {SourceCode} from 'eslint';
import esquery from 'esquery';
import {
  jsdocVisitorKeys, jsdocTypeVisitorKeys,
  getJSDocComment,
  parseComment, commentParserToESTree
} from '@es-joy/jsdoccomment';

const jsdocCommentProperty = 'jsdoc';
const jsdocBlocksProperty = 'jsdocBlocks';

const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const getJsdocEslintParser = (parser, bakedInOptions = {}) => {
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

    const takenRanges = {};

    esquery.traverse(ast, sel, (node, parent) => {
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
        let commentToken = getJSDocComment(sourceCode, node, {
          minLines,
          maxLines
        });

        let ancestor = parent;
        do {
          if (ancestor.type === 'Program') {
            break;
          }
          const ancestorCommentToken = getJSDocComment(sourceCode, ancestor, {
            minLines,
            maxLines
          });

          if (ancestorCommentToken && ancestorCommentToken === commentToken) {
            // Ancestor has handled instead
            commentToken = null;
            break;
          }

          ancestor = ancestor.parent;
        } while (ancestor);

        if (commentToken) {
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
          ).match(/\s+$/u) || '';

          const jsdoc = parseComment(
            commentToken,
            indnt
          );
          commentAST = commentParserToESTree(jsdoc, mode, {
            throwOnTypeParsingErrors
          });
          commentAST.loc = clone(commentToken.loc);
          commentAST.range = clone(commentToken.range);

          takenRanges[commentToken.range] = true;

          esquery.traverse(commentAST, sel, (_node, parent) => {
            // `parent` not available by default, so we add; must be
            //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
            _node.parent = parent;

            // For now, we are just fudging these by using the comment block's
            //   location
            _node.loc = clone(commentToken.loc);
            _node.range = clone(commentToken.range);
          }, {visitorKeys: newVisitorKeys});
        }
      }

      if (node.type !== 'Program' && !node.type.startsWith('Jsdoc')) {
        node[jsdocCommentProperty] = commentAST;
      }
    }, {visitorKeys: newVisitorKeys});

    if (ast.comments) {
      ast[jsdocBlocksProperty] = ast.comments.map(({
        type, value: comment, range, loc
      }, idx) => {
        if (type !== 'Block' || takenRanges[range]) {
          return null;
        }
        let jsdoc;
        try {
          // Todo: detect leading whitespace for indent argument?
          jsdoc = parseComment({value: comment}, indent);
          if (!jsdoc) {
            return null;
          }
        // Unreachable?
        /* c8 ignore next 3 */
        } catch (err) {
          return null;
        }
        const commentAST = commentParserToESTree(jsdoc, mode, {
          throwOnTypeParsingErrors
        });

        commentAST.loc = clone(loc);
        commentAST.range = clone(range);
        commentAST.commentsIndex = idx;

        esquery.traverse(commentAST, sel, (node, parent) => {
          // `parent` not available by default, so we add; must be
          //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
          node.parent = parent;

          // For now, we are just fudging these by using the comment block's
          //   location
          node.loc = clone(loc);
          node.range = clone(range);
        }, {visitorKeys: newVisitorKeys});

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
