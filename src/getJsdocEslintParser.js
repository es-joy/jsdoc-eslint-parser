import {SourceCode} from 'eslint';
import esquery from 'esquery';
import {
  jsdocVisitorKeys, jsdocTypeVisitorKeys,
  getJSDocComment,
  parseComment, commentParserToESTree
} from '@es-joy/jsdoccomment';

const jsdocCommentProperty = 'jsdoc';
const jsdocBlocksProperty = 'jsdocBlocks';

const getJsdocEslintParser = (parser) => {
  return function (code, options) {
    const {
      mode = 'jsdoc',
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
      ...parserOptions

      // These would be needed by the regular Babel parser, but apparently
      //   this Babel ESLint parser properly adds them for us:
      // Required by ESLint on `Program`
      // tokens: true,
      // Required by ESLint on each Node
      // ranges: true
    });

    const modifiedVisitorKeys = JSON.parse(JSON.stringify(visitorKeys));
    Object.entries(modifiedVisitorKeys).forEach(([key, value]) => {
      modifiedVisitorKeys[key] = Array.isArray(value)
        ? [jsdocCommentProperty, jsdocBlocksProperty, ...value]
        /* c8 ignore next 1 */
        : [jsdocCommentProperty, jsdocBlocksProperty];
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

    // Todo: Need to utilize together with this `getJSDocComment`
    //  (ESLint's is deprecated). Should really be building this as building
    //  AST rather than traversing and running on each node
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
    esquery.traverse(ast, sel, (node, parent) => {
      // `parent` not available by default, so we add; must be
      //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
      node.parent = parent;

      // Have must `range` and `loc` per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
      // We've specified `ranges` above and seem to be getting `loc` set.
      // const [start, end] = node.range;
      // node.loc = {start: {line: 0}, end: {line: 0}};
      // node.loc = {start: {line: start}, end: {line: end}};

      const commentToken = getJSDocComment(sourceCode, node, {
        minLines,
        maxLines
      });

      let commentAST = null;
      if (commentToken) {
        const jsdoc = parseComment(
          commentToken,
          indent
        );
        commentAST = commentParserToESTree(jsdoc, mode, {
          throwOnTypeParsingErrors
        });
        commentAST.loc = commentToken.loc;
        commentAST.range = commentToken.range;
        esquery.traverse(commentAST, sel, (_node, parent) => {
          // `parent` not available by default, so we add; must be
          //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
          _node.parent = parent;

          // For now, we are just fudging these by using the comment block's
          //   location
          _node.loc = commentToken.loc;
          _node.range = commentToken.range;
        }, {visitorKeys: newVisitorKeys});
      }

      if (!node.type.startsWith('Jsdoc')) {
        node[jsdocCommentProperty] = commentAST;
      }
    }, {visitorKeys: newVisitorKeys});

    if (ast.comments) {
      ast[jsdocBlocksProperty] = ast.comments.map(({
        type, value: comment, range, loc
      }, idx) => {
        if (type !== 'Block') {
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

        commentAST.loc = loc;
        commentAST.range = range;
        commentAST.commentsIndex = idx;

        esquery.traverse(commentAST, sel, (node, parent) => {
          // `parent` not available by default, so we add; must be
          //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
          node.parent = parent;

          // For now, we are just fudging these by using the comment block's
          //   location
          node.loc = loc;
          node.range = range;
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
