# @es-joy/jsdoc-eslint-parser

***This project has not been well-tested and should be considered
experimental.***

This project aims to allow full `@babel/eslint-parser` configuration, but with
`comment-parser`-based AST for JSDoc blocks and `jsdoctypeparser` AST for
JSDoc types within those blocks.

There is also a `@es-joy/jsdoc-eslint-parser/typescript.js` parser which
builds on `@typescript-eslint/parser`.

It is hoped that this may spur development of official ESTree acceptance of
such AST.

You can run our `lint-test` script for an example.

## Use cases

1. Using [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)
    to prohibit certain comment or comment type AST
2. Supplying comment or comment-type aware query selectors to `contexts` in
    [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)

## Approach for attaching AST

In using the Babel ESLint parser, AST is produced which has the `tokens` on
`Program` expected by ESLint as well as the `range` array expected on each
Node.

We add comment AST--or, rather, `JSDocBlock` AST--by adding a `jsdoc` property
to each item of the `@babel/eslint-parser`-parsed code which does not have a
suitable ancestor to hold the comment block. We correspondingly
update the visitor keys to ensure that for every key's array of visitable
properties, `jsdoc` is added, so it can be separately traversable. We also
ensure the `comment-parser` and `jsdoctypeparser` visitor keys are added to
our parser's visitor keys.

And we add a `parent` for each Node so that our `getJSDocComment` method can
find its way around (see below).

The tricky part with the `jsdoc` property comes in with determining
*which* JSDoc should be associated with a given Node. In
[`jsdoccomment`](https://github.com/es-joy/jsdoccomment),
we have a `getJSDocComment` method, originally begun by ESLint itself to
determine where that should be expected.

This detection of the comment for a given structure is not a trivial matter.
For example, with:

```js
/* A */
const /* B */ aFunc = /* C */ function () {};
```

... for the function expression, we might look for the JSDoc Block at point C
or B first, but then if not present, look for it at point A. The
`getJSDocComment` method uses such an algorithm, and we call this in our
parser currently on each node. If there is no JSDoc block at point B or
C, the node for the `aFunc` `VariableDeclaration` node should get the JSDoc
Block at point A added instead of the `FunctionExpression` getting it.

Although abstractly, it may appear a better fit with `FunctionExpression`,
the practical purposes of finding JSDoc blocks relates more to position and
code generation, which should be easiest to work with if in a position closest
to its actual location.

Note that the AST produced is described in the
[jsdoccomment](https://github.com/es-joy/jsdoccomment) project. Additionally,
this parser adds to `Program` nodes, a `jsdocBlocks` property (corresponding
to `comments` though for unattached comment blocks only), along with a
`commentsIndex` integer proprerty to reflect the index to which this JSDoc
block corresponds with the `comments` array.

## Installation

```shell
npm i -D @es-joy/jsdoc-eslint-parser
```

## Parser options

### `mode` (Defaults to "jsdoc")

The `jsdoctypeparser` mode, `jsdoc`, `typescript`, `closure`, or `permissive`.
The latter is not generally recommended.

### `maxLines` (default: 1) and `minLines` (default: 0)

Determines how far up in terms of lines from a structure, we should allow the
finding of comment blocks.

### `indent` (default: "")

This is currently exposed but should probably not be changed and may be
removed in the future. It indicates the indent to be used when parsing
comments. (That may need to be auto-detected in the future.)

### `sourceType` (defaults to `@babel/eslint-parser`'s default)

For indicating `script` or `module`

### `babelOptions` (default: none)

Extra options to pass on to Babel (if not using the `typescript` parser).

### `...parserOptions` (default: none)

Any other options are passed onto the parser.

## Changelog

The changelog can be found on the [CHANGES.md](./CHANGES.md).
<!--## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).
-->
## Authors and license

[Brett Zamir](http://brett-zamir.me/) and
[contributors](https://github.com/es-joy/jsdoc-eslint-parser/graphs/contributors).

MIT License, see the included [LICENSE-MIT.md](LICENSE-MIT.md) file.
