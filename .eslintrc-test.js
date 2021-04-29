'use strict';

module.exports = {
  parser: './src/index.js',
  parserOptions: {
    requireConfigFile: false
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      'FunctionDeclaration > JSDocBlock.param[0] > JSDocType[value="string"]'
    ]
  }
};
