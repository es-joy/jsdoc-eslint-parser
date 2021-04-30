'use strict';

const {parseForESLint: babelParser} = require('@babel/eslint-parser');
const commentParser = require('comment-parser');
const jsdoctypeparser = require('jsdoctypeparser');
const {getJSDocComment} = require('@es-joy/jsdoccomment');
const {SourceCode} = require('eslint/lib/source-code/index.js');

// eslint-disable-next-line node/exports-style -- Required by ESLint
exports.parseForESLint = function (code, options) {
  // console.log('options', options, code);
  const {ast, scopeManager, visitorKeys} = babelParser(code, {
    // Grab if not within `babelOptions`
    sourceType: options.sourceType,
    ...options.babelOptions,

    // Required by ESLint on `Program`
    tokens: true,
    // Required by ESLint on each Node
    ranges: true
  });

  // Todo: Add comments and comment types! (ensure passing in comment option)
  // Todo: Add visitorKeys for comments and comment types both
  commentParser;
  jsdoctypeparser;
  // Todo: Need to utilize together with this `getJSDocComment`
  //  (ESLint's is deprecated). For now, might just traverse and run on
  //  each node
  getJSDocComment;
  SourceCode;

  console.log('ast', ast);
  return {
    ast,
    // Expose comment or type parsing utilities?
    services: {
      foo () {
        // eslint-disable-next-line no-console -- Testing
        console.log('test');
      }
    },
    scopeManager,
    visitorKeys
  };
};
