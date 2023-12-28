declare module '@babel/eslint-parser' {
  const parseForESLint: (
    code: string, options: any
  ) => import('eslint').Linter.ESLintParseResult
}
