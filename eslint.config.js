import ashNazg from 'eslint-config-ash-nazg';

export default [
  {
    ignores: [
      'coverage',
      'dist',
      '.idea'
    ]
  },
  ...ashNazg(['sauron', 'node']),

  {
    files: ['**/*.md/*.js'],
    rules: {
      'import/unambiguous': 'off',
      'no-empty-function': 'off',
      'no-unused-vars': ['error', {varsIgnorePattern: 'aFunc'}]
    }
  },
  {
    rules: {
    }
  }
];
