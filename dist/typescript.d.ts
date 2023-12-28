export const parseForESLint: (code: string, options?: {
    mode?: "closure" | "jsdoc" | "typescript" | undefined;
    maxLines?: number | undefined;
    minLines?: number | undefined;
    indent?: string | undefined;
    throwOnTypeParsingErrors?: boolean | undefined;
    sourceType?: "script" | "module" | undefined;
    babelOptions?: any;
}) => {
    ast: import("eslint").AST.Program;
    services: {};
    scopeManager: import("eslint").Scope.ScopeManager | undefined;
    visitorKeys: any;
};
//# sourceMappingURL=typescript.d.ts.map