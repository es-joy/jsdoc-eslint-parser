'use strict';

module.exports = {
  plugins: ['jsdoc'],
  parser: './src/index.js',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {

    }
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      'FunctionDeclaration > JSDocBlock > JSDocTag[name="param"] > JSDocType[value="string"]'
    ],
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false
        },
        contexts: [
          'FunctionDeclaration:has(JSDocBlock > JSDocTag[name="param"])'
        ]
      }
    ]
  }
};
