'use strict';

const {parseForESLint: babelParser} = require('@babel/eslint-parser');
const esquery = require('esquery');
const {
  jsdocVisitorKeys, jsdocTypeVisitorKeys,
  getJSDocComment,
  parseComment, commentParserToESTree
} = require('@es-joy/jsdoccomment');
const {SourceCode} = require('eslint');

const jsdocCommentProperty = 'jsdoc';
const jsdocBlocksProperty = 'jsdocBlocks';

// eslint-disable-next-line node/exports-style -- Required by ESLint
exports.parseForESLint = function (code, options) {
  const {
    mode = 'jsdoc',
    maxLines = 1,
    minLines = 0,
    indent = '',
    sourceType,
    babelOptions
  } = options;

  // console.log('options', options, code);
  const {ast, scopeManager, visitorKeys} = babelParser(code, {
    // Grab if not within `babelOptions`
    sourceType,
    ...babelOptions

    // These would be needed by the regular Babel parser, but apparently
    //   this Babel ESLint parser properly adds them for us:
    // Required by ESLint on `Program`
    // tokens: true,
    // Required by ESLint on each Node
    // ranges: true
  });

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
      commentAST = commentParserToESTree(jsdoc, mode);
      esquery.traverse(commentAST, sel, (node, parent) => {
        // `parent` not available by default, so we add; must be
        //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
        node.parent = parent;
      });
    }

    node[jsdocCommentProperty] = commentAST;
  });

  if (ast.comments) {
    ast[jsdocBlocksProperty] = ast.comments.map(({type, value: comment, range, loc}) => {
      if (type !== 'Block') {
        return null;
      }
      let jsdoc;
      try {
        // Todo: detect leading whitespace for indent argument?
        jsdoc = parseComment({value: comment}, indent);
      } catch (err) {
        return null;
      }
      const commentAST = commentParserToESTree(jsdoc, mode);

      commentAST.loc = loc;
      commentAST.range = range;

      esquery.traverse(commentAST, sel, (node, parent) => {
        // `parent` not available by default, so we add; must be
        //   rewritable per https://eslint.org/docs/developer-guide/working-with-custom-parsers#all-nodes
        node.parent = parent;
      });

      return commentAST;
    }).filter((ast) => {
      return ast;
    });
  }

  const modifiedVisitorKeys = JSON.parse(JSON.stringify(visitorKeys));
  Object.entries(modifiedVisitorKeys).forEach(([key, value]) => {
    modifiedVisitorKeys[key] = Array.isArray(value)
      ? [jsdocCommentProperty, jsdocBlocksProperty, ...value]
      : [jsdocCommentProperty, jsdocBlocksProperty];
  });

  // console.log('modifiedVisitorKeys', modifiedVisitorKeys);
  // console.log('ast', ast.jsdoc.tags[0]);

  return {
    ast,
    services: parserServices,
    scopeManager,
    visitorKeys: {
      ...modifiedVisitorKeys,
      ...jsdocVisitorKeys,
      ...jsdocTypeVisitorKeys
    }
  };
};
