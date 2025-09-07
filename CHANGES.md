# CHANGES for `@es-joy/jsdoc-eslint-parser`

## 0.23.0

- chore: update deps. and devDeps.

## 0.22.0

- chore: update deps. and devDeps.

## 0.21.1

- fix: update build files

## 0.21.0

- feat: add types
- chore: update deps. and devDeps.

## 0.20.0

- chore: update deps. and devDeps. and lint

## 0.19.0

- chore: update `es-joy/jsdoccomment` (`inlineTags` support) and devDeps.

## 0.18.0

- chore: update `babel/core`, `babel/eslint-parser`, `es-joy/jsdoccomment`,
    `typescript-eslint/parser`, `eslint`, `esquery`, `typescript` and devDeps.

## 0.17.0

- chore: update `babel/core`, `es-joy/jsdoccomment`,
    `typescript-eslint/parser`, `eslint`, `typescript` and devDeps.

## 0.16.0

- chore: bump `jsdoccomment`

## 0.15.0

- chore: bump `jsdoccomment`

## 0.14.1

- chore: bump `jsdoccomment`

## 0.14.0

- chore: bump `jsdoccomment`
- chore: update devDeps.
- test: checks for unattached comment (now that one example is attached)

## 0.13.0

- feat: set indent for attached comments based on source context
- chore: bump `jsdoccomment`

## 0.12.0

- feat: allow for empty options
- fix: bake in typescript mode to typescript parser
- fix: avoid `jsdoc` on `Program` (had only dropped as a visitor key)
- chore: bump `jsdoccomment`

## 0.11.3

- chore: update dep. `jsdoccomment`

## 0.11.2

- fix: hide already attached `jsdoc` from global `jsdocBlocks`

## 0.11.1

- fix: avoid adding `jsdocBlocks` to any node except `Program` and drop
    `jsdoc` from `Program`

## 0.11.0

- BREAKING CHANGE: chore: update `jsdoccomment`, `typescript-eslint/parser`;
    must now use `initial` and `terminal` in place of `start` and `end`
- chore: updates devDeps.

## 0.10.1

- fix: ensure TS parser passing in tokens, comment, loc, range, sourceType:
    module info

## 0.10.0

- BREAKING feat: ESM
- BREAKING fix: avoid setting `jsdoc` on `Program` or `Jsdoc` nodes themselves
- BREAKING fix: avoid setting `jsdoc` on any descendants where the ancestor
    can match
- fix: avoid attaching `jsdoc` to `jsdoc` nodes
- fix: clone `range` and `SourceLocation` rather than reusing
- chore: fix linting
- test: Get 100% coverage

## 0.9.0

- feat: add `commentsIndex` integer property
- chore: update babel/core, typescript-eslint/parser, and eslint; update
    devDeps.

## 0.8.2

- fix: avoid erring out on non-JSDoc result (since
    `comment-parser` simplification)
- chore: update lock file

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
