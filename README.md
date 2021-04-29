# @es-joy/jsdoc-eslint-parser

***This project is not yet functional.***

This project aims to allow full `@babel/eslint-parser` configuration, but with
`comment-parser`-based AST for JSDoc blocks and `jsdoctypeparser` AST for
JSDoc types within those blocks.

It is hoped that this may spur development of official ESTree acceptance of
such AST.

## Use cases

1. Using [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)
    to prohibit certain comment or comment type AST
2. Supplying comment or comment-type aware query selectors to `contexts` in
    [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)

## Installation

```shell
npm i -D @es-joy/jsdoc-eslint-parser
```

## Changelog

The changelog can be found on the [CHANGES.md](./CHANGES.md).
<!--## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).
-->
## Authors and license

[Brett Zamir](http://brett-zamir.me/) and
[contributors](https://github.com/es-joy/jsdoc-eslint-parser/graphs/contributors).

MIT License, see the included [LICENSE-MIT.md](LICENSE-MIT.md) file.
