'use strict';

module.exports = {
  extends: [
    'ash-nazg/sauron-node-script-overrides'
  ],
  settings: {
    polyfills: [
      'console'
    ]
  },

  // Auto-set dynamically by config but needs to be explicit for Atom
  parserOptions: {
    ecmaVersion: 2021
  },

  rules: {
  }
};
