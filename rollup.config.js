import resolve from '@rollup/plugin-node-resolve';

/* eslint-disable jsdoc/require-property -- not proper TypeScript */
/**
 * @typedef {object} RollupConfig
 * @see {@link https://rollupjs.org/guide/en#big-list-of-options}
 */
/* eslint-enable jsdoc/require-property -- not proper TypeScript */

/**
 * @param {object} config
 * @param {string} config.input
 * @param {string} [config.format]
 * @param {boolean} [config.minifying]
 * @returns {RollupConfig}
 */
function getRollupObject ({input, minifying, format = 'umd'} = {}) {
  const nonMinified = {
    input,
    external: [
      '@babel/eslint-parser', 'eslint',
      'jsdoc-type-pratt-parser', `comment-parser`,
      '@typescript-eslint/parser'
    ],
    output: {
      name: 'JsdocEslintParser',
      format,
      sourcemap: minifying,
      file: `dist/${input.replace(/\.js$/u, format === 'cjs' ? '' : `.${format}`)}${
        minifying ? '.min' : ''
      }.${format === 'cjs' || format === 'umd' ? 'c' : ''}js`
    },
    plugins: [
      resolve()
    ]
  };
  /*
  if (minifying) {
    nonMinified.plugins.push(terser());
  }
  */
  return nonMinified;
}

export default [
  getRollupObject({
    input: 'src/index.js', format: 'cjs'
  }),
  getRollupObject({
    input: 'typescript.js', format: 'cjs'
  })
];
