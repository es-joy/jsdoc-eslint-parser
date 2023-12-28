export default getJsdocEslintParser;
export type JsdocBlockEnhanced = import('@es-joy/jsdoccomment').JsdocBlock & {
    loc: import('estree').SourceLocation;
    range: [number, number];
    commentsIndex: number;
};
export type TraverseCallback = (node: import('eslint').Rule.Node & {
    parent: import('eslint').Rule.Node;
    jsdoc?: import('@es-joy/jsdoccomment').JsdocBlock | null;
}, parent: import('eslint').Rule.Node) => void;
export type AnyObject = any;
/**
 * @param {(
 *   code: string,
 *   options: any
 * ) => import('eslint').Linter.ESLintParseResult} parser
 * @param {{
 *   mode?: "jsdoc"|"closure"|"typescript"
 * }} bakedInOptions
 */
declare function getJsdocEslintParser(parser: (code: string, options: any) => import('eslint').Linter.ESLintParseResult, bakedInOptions?: {
    mode?: "jsdoc" | "closure" | "typescript";
}): (code: string, options?: {
    mode?: "jsdoc" | "closure" | "typescript";
    maxLines?: number;
    minLines?: number;
    indent?: string;
    throwOnTypeParsingErrors?: boolean;
    sourceType?: "script" | "module";
    babelOptions?: any;
}) => {
    ast: import("eslint").AST.Program;
    services: {};
    scopeManager: import("eslint").Scope.ScopeManager | undefined;
    visitorKeys: any;
};
//# sourceMappingURL=getJsdocEslintParser.d.ts.map