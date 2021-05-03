'use strict';

module.exports = {
  root: true,
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
      'FunctionDeclaration:has(JSDocBlock > ' +
        'JSDocTag:has([rawType=/string/]) > JSDocTypeUnion)',
      'FunctionDeclaration:has(JSDocBlock:has(' +
        'JSDocTypeUnion[right.name="number"]))'
    ],
    'jsdoc/require-description': [
      'error',
      {
        contexts: [
          'FunctionDeclaration:has(JSDocBlock:has(' +
            'JSDocTypeUnion[right.name="number"]))'
        ]
      }
    ]
  }
};
