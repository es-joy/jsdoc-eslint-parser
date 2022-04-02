# CHANGES for `@es-joy/jsdoc-eslint-parser`

## 0.8.1

- chore: update `@es-joy/jsdoccomment` (minor), `@babel/core` (patch),
    `eslint` (minor) and devDeps.

## 0.8.0

- BREAKING CHANGE: require Node 12
- feat: support `@es-joy/jsdoc-eslint-parser/typescript` parser
- fix: pass on comment visitor keys upon traversal for `parent` attachment
- fix: add `loc` and `range` (used by ESLint in error reporting)

## 0.7.2

- chore: update jsdoccomment

## 0.7.1

- chore: update jsdoccomment

## 0.7.0

- feat: `throwOnTypeParsingErrors` option
- chore: update jsdoccomment and devDeps.

## 0.6.3

- fix: attach `parent` to JSDoc nodes

## 0.6.2

- fix: ensure tags, etc. get attached to `jsdocBlocks` blocks

## 0.6.1

- fix: avoid chance for `Line` comments beginning with asterisk being parsed
    as JSDoc blocks

## 0.6.0

- feat: add `loc` and `range` to individual `jsdocBlocks`

## 0.5.0

- feat: support `jsdocBlocks` property (on `Program`)
- fix: Replace any non-array key values with array
- chore: add `.idea` to `.gitignore`
- chore: Update devDeps.

## 0.4.1

- chore: bump `@es-joy/jsdoccomment`, `@babel/core`, `eslint`
- chore: Update devDeps.

## 0.4.0

- npm: Bump dep. `@es-joy/jsdoccomment`, `@babel/core`,
    `@babel/eslint-parser`, `eslint`
- npm: Update devDeps.
- chore: allow `lint` script to be passed `--fix`

## 0.3.0

- npm: Bump dep. `@es-joy/jsdoccomment`, `@babel/core`,
    `@babel/eslint-parser`, `eslint`
- npm: Update devDeps.

## 0.2.0

- npm: Bump dep. `@es-joy/jsdoccomment`, `@babel/core`,
    `@babel/eslint-parser`, `eslint`
- npm: Update devDeps.

## 0.1.4

- npm: Bump dep. `@es-joy/jsdoccomment`

## 0.1.3

- Docs: Refer to `jsdoccomment` for AST structure

## 0.1.2

- Docs: Indicate options and AST approach
- Refactoring: Comment out unnecessary arguments
- npm: Update `@es-joy/jsdoccomment` dep. (just doc changes)

## 0.1.1

- Docs: Update

## 0.1.0

- Initial version
