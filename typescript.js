import {
  parseForESLint as typescriptEslintParser
// eslint-disable-next-line import/no-unresolved -- Bug?
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
