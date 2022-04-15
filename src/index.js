import {parseForESLint as babelParser} from '@babel/eslint-parser';

import getJsdocEslintParser from './getJsdocEslintParser.js';

export const parseForESLint = getJsdocEslintParser(babelParser);
