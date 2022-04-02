'use strict';

const {
  parseForESLint: typescriptEslintParser
} = require('@typescript-eslint/parser');

const getJsdocEslintParser = require('./src/getJsdocEslintParser.js');

// eslint-disable-next-line node/exports-style -- Required by ESLint
exports.parseForESLint = getJsdocEslintParser(typescriptEslintParser);
