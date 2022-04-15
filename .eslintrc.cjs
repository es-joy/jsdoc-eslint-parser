'use strict';

module.exports = {
  extends: [
    'ash-nazg/sauron-node-overrides'
  ],
  settings: {
    jsdoc: {
      mode: 'typescript'
    },
    polyfills: [
      'console'
    ]
  },

  overrides: [
    {
      files: '.eslintrc-test.cjs',
      extends: 'ash-nazg/sauron-node-script-overrides'
    },
    {
      files: '**/*.md/*.js',
      rules: {
        'import/unambiguous': 'off',
        'no-empty-function': 'off',
        'no-unused-vars': ['error', {varsIgnorePattern: 'aFunc'}]
      }
    }
  ],

  // Auto-set dynamically by config but needs to be explicit for Atom
  parserOptions: {
    ecmaVersion: 2021
  },

  rules: {
  }
};
