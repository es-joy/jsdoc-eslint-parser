'use strict';

module.exports = {
  plugins: ['jsdoc'],
  parser: './src/index.js',
  parserOptions: {
    requireConfigFile: false
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      'FunctionDeclaration > JSDocBlock.param[0] > JSDocType[value="string"]'
    ],
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false
        },
        contexts: [
          'FunctionDeclaration:has(JSDocBlock.param[0])'
        ]
      }
    ]
  }
};
