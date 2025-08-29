import jsdoc from 'eslint-plugin-jsdoc';
import * as parser from './src/index.js';

export default [
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: {
      parser
    },
    rules: {
      'no-console': ['error'],
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
  }
];
