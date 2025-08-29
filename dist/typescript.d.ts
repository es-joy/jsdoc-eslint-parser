export const parseForESLint: (code: string, options?: {
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
//# sourceMappingURL=typescript.d.ts.map