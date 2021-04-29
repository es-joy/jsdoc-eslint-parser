'use strict';

const babelParser = require('@babel/eslint-parser');

// eslint-disable-next-line no-console -- Testing
console.log('babelParser', babelParser);

// eslint-disable-next-line node/exports-style -- Required by ESLint
exports.parseForESLint = function (code, options) {
  return {
    // Todo: Add comments and comment types!
    ast: babelParser(code, options),
    // Expose comment or type parsing utilities?
    services: {
      foo () {
        // eslint-disable-next-line no-console -- Testing
        console.log('test');
      }
    },
    scopeManager: null,
    // Todo: Add for comments and comment types both
    visitorKeys: null
  };
};
