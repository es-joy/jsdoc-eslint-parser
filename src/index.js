'use strict';

const {parseForESLint: babelParser} = require('@babel/eslint-parser');

const getJsdocEslintParser = require('./getJsdocEslintParser.js');

// eslint-disable-next-line node/exports-style -- Required by ESLint
exports.parseForESLint = getJsdocEslintParser(babelParser);
