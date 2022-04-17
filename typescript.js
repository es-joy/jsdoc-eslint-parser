import {
  parseForESLint as typescriptEslintParser
} from '@typescript-eslint/parser';

import getJsdocEslintParser from './src/getJsdocEslintParser.js';

export const parseForESLint = getJsdocEslintParser(typescriptEslintParser, {
  mode: 'typescript',
  tokens: true,
  comment: true,
  loc: true,
  range: true,
  sourceType: 'module'
});
