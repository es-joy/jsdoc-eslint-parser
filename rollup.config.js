import resolve from '@rollup/plugin-node-resolve';

/**
 * @external RollupConfig
 * @type {PlainObject}
 * @see {@link https://rollupjs.org/guide/en#big-list-of-options}
 */

/**
 * @param {PlainObject} config
 * @param {string} config.input
 * @param {string} [config.format="umd"]
 * @param {boolean} [config.minifying=false]
 * @returns {external:RollupConfig}
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
