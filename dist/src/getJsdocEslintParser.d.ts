export default getJsdocEslintParser;
export type JsdocBlockEnhanced = import("@es-joy/jsdoccomment").JsdocBlock & {
    loc: import("estree").SourceLocation;
    range: [number, number];
    commentsIndex: number;
};
export type TraverseCallback = (node: import("estree").Node & {
    parent?: import("estree").Node & {
        parent?: import("estree").Node;
    };
    jsdoc?: import("@es-joy/jsdoccomment").JsdocBlock | null;
}, parent: import("estree").Node) => void;
export type AnyObject = any;
export type Options = {
    mode?: "jsdoc" | "closure" | "typescript";
    maxLines?: number;
    minLines?: number;
    indent?: string;
    throwOnTypeParsingErrors?: boolean;
    sourceType?: "script" | "module";
    babelOptions?: any;
};
/**
 * @param {(
 *   code: string,
 *   options: Options
 * ) => import('eslint').Linter.ESLintParseResult} parser
 * @param {{
 *   mode?: "jsdoc"|"closure"|"typescript"
 * }} bakedInOptions
 */
declare function getJsdocEslintParser(parser: (code: string, options: Options) => import("eslint").Linter.ESLintParseResult, bakedInOptions?: {
    mode?: "jsdoc" | "closure" | "typescript";
}): (code: string, options?: Options) => {
    ast: import("eslint").AST.Program;
    services: {};
    scopeManager: import("eslint").Scope.ScopeManager | undefined;
    visitorKeys: {
        JsdocTypeName: (keyof import("@es-joy/jsdoccomment").NameResult)[];
        JsdocTypeInfer: (keyof import("@es-joy/jsdoccomment").InferResult)[];
        JsdocTypeUniqueSymbol: (keyof import("@es-joy/jsdoccomment").UniqueSymbolResult)[];
        JsdocTypeUnion: (keyof import("@es-joy/jsdoccomment").UnionResult)[];
        JsdocTypeGeneric: (keyof import("@es-joy/jsdoccomment").GenericResult)[];
        JsdocTypeStringValue: (keyof import("@es-joy/jsdoccomment").StringValueResult)[];
        JsdocTypeNull: (keyof import("@es-joy/jsdoccomment").NullResult)[];
        JsdocTypeUndefined: (keyof import("@es-joy/jsdoccomment").UndefinedResult)[];
        JsdocTypeAny: (keyof import("@es-joy/jsdoccomment").AnyResult)[];
        JsdocTypeUnknown: (keyof import("@es-joy/jsdoccomment").UnknownResult)[];
        JsdocTypeFunction: (keyof import("@es-joy/jsdoccomment").FunctionResult)[];
        JsdocTypeObject: (keyof import("@es-joy/jsdoccomment").ObjectResult)[];
        JsdocTypeNamePath: (keyof import("@es-joy/jsdoccomment").NamePathResult)[];
        JsdocTypeSymbol: (keyof import("@es-joy/jsdoccomment").SymbolResult)[];
        JsdocTypeTypeof: (keyof import("@es-joy/jsdoccomment").TypeOfResult)[];
        JsdocTypeKeyof: (keyof import("@es-joy/jsdoccomment").KeyOfResult)[];
        JsdocTypeImport: (keyof import("@es-joy/jsdoccomment").ImportResult)[];
        JsdocTypeTuple: (keyof import("@es-joy/jsdoccomment").TupleResult)[];
        JsdocTypeSpecialNamePath: (keyof import("@es-joy/jsdoccomment").SpecialNamePath<import("@es-joy/jsdoccomment").SpecialNamePathType>)[];
        JsdocTypeOptional: (keyof import("@es-joy/jsdoccomment").OptionalResult<import("@es-joy/jsdoccomment").RootResult>)[];
        JsdocTypeNullable: (keyof import("@es-joy/jsdoccomment").NullableResult<import("@es-joy/jsdoccomment").RootResult>)[];
        JsdocTypeNotNullable: (keyof import("@es-joy/jsdoccomment").NotNullableResult<import("@es-joy/jsdoccomment").RootResult>)[];
        JsdocTypeVariadic: (keyof import("@es-joy/jsdoccomment").VariadicResult<import("@es-joy/jsdoccomment").RootResult>)[];
        JsdocTypeParenthesis: (keyof import("@es-joy/jsdoccomment").ParenthesisResult)[];
        JsdocTypeIntersection: (keyof import("@es-joy/jsdoccomment").IntersectionResult)[];
        JsdocTypeNumber: (keyof import("@es-joy/jsdoccomment").NumberResult)[];
        JsdocTypeBigInt: (keyof import("@es-joy/jsdoccomment").BigIntResult)[];
        JsdocTypePredicate: (keyof import("@es-joy/jsdoccomment").PredicateResult)[];
        JsdocTypeAsserts: (keyof import("@es-joy/jsdoccomment").AssertsResult)[];
        JsdocTypeReadonlyArray: (keyof import("@es-joy/jsdoccomment").ReadonlyArrayResult)[];
        JsdocTypeAssertsPlain: (keyof import("@es-joy/jsdoccomment").AssertsPlainResult)[];
        JsdocTypeConditional: (keyof import("@es-joy/jsdoccomment").ConditionalResult)[];
        JsdocTypeTemplateLiteral: (keyof import("@es-joy/jsdoccomment").TemplateLiteralResult)[];
        JsdocTypeProperty: (keyof import("@es-joy/jsdoccomment").PropertyResult)[];
        JsdocTypeObjectField: (keyof import("@es-joy/jsdoccomment").ObjectFieldResult)[];
        JsdocTypeJsdocObjectField: (keyof import("@es-joy/jsdoccomment").JsdocObjectFieldResult)[];
        JsdocTypeKeyValue: (keyof import("@es-joy/jsdoccomment").KeyValueResult)[];
        JsdocTypeMappedType: (keyof import("@es-joy/jsdoccomment").MappedTypeResult)[];
        JsdocTypeIndexSignature: (keyof import("@es-joy/jsdoccomment").IndexSignatureResult)[];
        JsdocTypeTypeParameter: (keyof import("@es-joy/jsdoccomment").TypeParameterResult)[];
        JsdocTypeCallSignature: (keyof import("@es-joy/jsdoccomment").CallSignatureResult)[];
        JsdocTypeConstructorSignature: (keyof import("@es-joy/jsdoccomment").ConstructorSignatureResult)[];
        JsdocTypeMethodSignature: (keyof import("@es-joy/jsdoccomment").MethodSignatureResult)[];
        JsdocTypeIndexedAccessIndex: (keyof import("@es-joy/jsdoccomment").IndexedAccessIndexResult)[];
        JsdocTypeComputedProperty: (keyof import("@es-joy/jsdoccomment").ComputedPropertyResult)[];
        JsdocTypeComputedMethod: (keyof import("@es-joy/jsdoccomment").ComputedMethodResult)[];
        JsdocBlock: string[];
        JsdocDescriptionLine: never[];
        JsdocTypeLine: never[];
        JsdocTag: string[];
        JsdocInlineTag: never[];
    };
};
//# sourceMappingURL=getJsdocEslintParser.d.ts.map