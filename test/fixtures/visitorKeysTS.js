const visitorKeysTS = {
  AssignmentExpression: [
    'jsdoc',
    'left',
    'right'
  ],
  AssignmentPattern: [
    'jsdoc',
    'decorators',
    'left',
    'right',
    'typeAnnotation'
  ],
  AccessorProperty: [
    'jsdoc',
    'decorators',
    'key',
    'typeAnnotation',
    'value'
  ],
  ArrayExpression: [
    'jsdoc',
    'elements'
  ],
  ArrayPattern: [
    'jsdoc',
    'decorators',
    'elements',
    'typeAnnotation'
  ],
  ArrowFunctionExpression: [
    'jsdoc',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  AwaitExpression: [
    'jsdoc',
    'argument'
  ],
  BlockStatement: [
    'jsdoc',
    'body'
  ],
  BinaryExpression: [
    'jsdoc',
    'left',
    'right'
  ],
  BreakStatement: [
    'jsdoc',
    'label'
  ],
  CallExpression: [
    'jsdoc',
    'callee',
    'typeArguments',
    'arguments'
  ],
  CatchClause: [
    'jsdoc',
    'param',
    'body'
  ],
  ChainExpression: [
    'jsdoc',
    'expression'
  ],
  ClassBody: [
    'jsdoc',
    'body'
  ],
  ClassDeclaration: [
    'jsdoc',
    'decorators',
    'id',
    'typeParameters',
    'superClass',
    'superTypeArguments',
    'implements',
    'body'
  ],
  ClassExpression: [
    'jsdoc',
    'decorators',
    'id',
    'typeParameters',
    'superClass',
    'superTypeArguments',
    'implements',
    'body'
  ],
  ConditionalExpression: [
    'jsdoc',
    'test',
    'consequent',
    'alternate'
  ],
  ContinueStatement: [
    'jsdoc',
    'label'
  ],
  DebuggerStatement: [
    'jsdoc'
  ],
  DoWhileStatement: [
    'jsdoc',
    'body',
    'test'
  ],
  EmptyStatement: [
    'jsdoc'
  ],
  ExportAllDeclaration: [
    'jsdoc',
    'exported',
    'source',
    'assertions'
  ],
  ExportDefaultDeclaration: [
    'jsdoc',
    'declaration'
  ],
  ExportNamedDeclaration: [
    'jsdoc',
    'declaration',
    'specifiers',
    'source',
    'assertions'
  ],
  ExportSpecifier: [
    'jsdoc',
    'exported',
    'local'
  ],
  ExpressionStatement: [
    'jsdoc',
    'expression'
  ],
  ExperimentalRestProperty: [
    'jsdoc',
    'argument'
  ],
  ExperimentalSpreadProperty: [
    'jsdoc',
    'argument'
  ],
  ForStatement: [
    'jsdoc',
    'init',
    'test',
    'update',
    'body'
  ],
  ForInStatement: [
    'jsdoc',
    'left',
    'right',
    'body'
  ],
  ForOfStatement: [
    'jsdoc',
    'left',
    'right',
    'body'
  ],
  FunctionDeclaration: [
    'jsdoc',
    'id',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  FunctionExpression: [
    'jsdoc',
    'id',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  Identifier: [
    'jsdoc',
    'decorators',
    'typeAnnotation'
  ],
  IfStatement: [
    'jsdoc',
    'test',
    'consequent',
    'alternate'
  ],
  ImportDeclaration: [
    'jsdoc',
    'specifiers',
    'source',
    'assertions'
  ],
  ImportDefaultSpecifier: [
    'jsdoc',
    'local'
  ],
  ImportExpression: [
    'jsdoc',
    'source',
    'attributes'
  ],
  ImportNamespaceSpecifier: [
    'jsdoc',
    'local'
  ],
  ImportSpecifier: [
    'jsdoc',
    'imported',
    'local'
  ],
  JSXAttribute: [
    'jsdoc',
    'name',
    'value'
  ],
  JSXClosingElement: [
    'jsdoc',
    'name'
  ],
  JSXElement: [
    'jsdoc',
    'openingElement',
    'children',
    'closingElement'
  ],
  JSXEmptyExpression: [
    'jsdoc'
  ],
  JSXExpressionContainer: [
    'jsdoc',
    'expression'
  ],
  JSXIdentifier: [
    'jsdoc'
  ],
  JSXMemberExpression: [
    'jsdoc',
    'object',
    'property'
  ],
  JSXNamespacedName: [
    'jsdoc',
    'namespace',
    'name'
  ],
  JSXOpeningElement: [
    'jsdoc',
    'name',
    'typeArguments',
    'attributes'
  ],
  JSXSpreadAttribute: [
    'jsdoc',
    'argument'
  ],
  JSXText: [
    'jsdoc'
  ],
  JSXFragment: [
    'jsdoc',
    'openingFragment',
    'children',
    'closingFragment'
  ],
  JSXClosingFragment: [
    'jsdoc'
  ],
  JSXOpeningFragment: [
    'jsdoc'
  ],
  Literal: [
    'jsdoc'
  ],
  LabeledStatement: [
    'jsdoc',
    'label',
    'body'
  ],
  LogicalExpression: [
    'jsdoc',
    'left',
    'right'
  ],
  MemberExpression: [
    'jsdoc',
    'object',
    'property'
  ],
  MetaProperty: [
    'jsdoc',
    'meta',
    'property'
  ],
  MethodDefinition: [
    'jsdoc',
    'decorators',
    'key',
    'value'
  ],
  NewExpression: [
    'jsdoc',
    'callee',
    'typeArguments',
    'arguments'
  ],
  ObjectExpression: [
    'jsdoc',
    'properties'
  ],
  ObjectPattern: [
    'jsdoc',
    'decorators',
    'properties',
    'typeAnnotation'
  ],
  PrivateIdentifier: [
    'jsdoc'
  ],
  Program: [
    'jsdocBlocks',
    'body'
  ],
  Property: [
    'jsdoc',
    'key',
    'value'
  ],
  PropertyDefinition: [
    'jsdoc',
    'decorators',
    'key',
    'typeAnnotation',
    'value'
  ],
  RestElement: [
    'jsdoc',
    'decorators',
    'argument',
    'typeAnnotation'
  ],
  ReturnStatement: [
    'jsdoc',
    'argument'
  ],
  SequenceExpression: [
    'jsdoc',
    'expressions'
  ],
  SpreadElement: [
    'jsdoc',
    'argument'
  ],
  StaticBlock: [
    'jsdoc',
    'body'
  ],
  Super: [
    'jsdoc'
  ],
  SwitchStatement: [
    'jsdoc',
    'discriminant',
    'cases'
  ],
  SwitchCase: [
    'jsdoc',
    'test',
    'consequent'
  ],
  TaggedTemplateExpression: [
    'jsdoc',
    'tag',
    'typeArguments',
    'quasi'
  ],
  TemplateElement: [
    'jsdoc'
  ],
  TemplateLiteral: [
    'jsdoc',
    'quasis',
    'expressions'
  ],
  ThisExpression: [
    'jsdoc'
  ],
  ThrowStatement: [
    'jsdoc',
    'argument'
  ],
  TryStatement: [
    'jsdoc',
    'block',
    'handler',
    'finalizer'
  ],
  UnaryExpression: [
    'jsdoc',
    'argument'
  ],
  UpdateExpression: [
    'jsdoc',
    'argument'
  ],
  VariableDeclaration: [
    'jsdoc',
    'declarations'
  ],
  VariableDeclarator: [
    'jsdoc',
    'id',
    'init'
  ],
  WhileStatement: [
    'jsdoc',
    'test',
    'body'
  ],
  WithStatement: [
    'jsdoc',
    'object',
    'body'
  ],
  YieldExpression: [
    'jsdoc',
    'argument'
  ],
  ImportAttribute: [
    'jsdoc',
    'key',
    'value'
  ],
  JSXSpreadChild: [
    'jsdoc',
    'expression'
  ],
  Decorator: [
    'jsdoc',
    'expression'
  ],
  TSAbstractAccessorProperty: [
    'jsdoc',
    'decorators',
    'key',
    'typeAnnotation'
  ],
  TSAbstractKeyword: [
    'jsdoc'
  ],
  TSAbstractMethodDefinition: [
    'jsdoc',
    'key',
    'value'
  ],
  TSAbstractPropertyDefinition: [
    'jsdoc',
    'decorators',
    'key',
    'typeAnnotation'
  ],
  TSAnyKeyword: [
    'jsdoc'
  ],
  TSArrayType: [
    'jsdoc',
    'elementType'
  ],
  TSAsExpression: [
    'jsdoc',
    'expression',
    'typeAnnotation'
  ],
  TSAsyncKeyword: [
    'jsdoc'
  ],
  TSBigIntKeyword: [
    'jsdoc'
  ],
  TSBooleanKeyword: [
    'jsdoc'
  ],
  TSCallSignatureDeclaration: [
    'jsdoc',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSClassImplements: [
    'jsdoc',
    'expression',
    'typeArguments'
  ],
  TSConditionalType: [
    'jsdoc',
    'checkType',
    'extendsType',
    'trueType',
    'falseType'
  ],
  TSConstructorType: [
    'jsdoc',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSConstructSignatureDeclaration: [
    'jsdoc',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSDeclareFunction: [
    'jsdoc',
    'id',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  TSDeclareKeyword: [
    'jsdoc'
  ],
  TSEmptyBodyFunctionExpression: [
    'jsdoc',
    'id',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSEnumDeclaration: [
    'jsdoc',
    'id',
    'members'
  ],
  TSEnumMember: [
    'jsdoc',
    'id',
    'initializer'
  ],
  TSExportAssignment: [
    'jsdoc',
    'expression'
  ],
  TSExportKeyword: [
    'jsdoc'
  ],
  TSExternalModuleReference: [
    'jsdoc',
    'expression'
  ],
  TSFunctionType: [
    'jsdoc',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSImportEqualsDeclaration: [
    'jsdoc',
    'id',
    'moduleReference'
  ],
  TSImportType: [
    'jsdoc',
    'argument',
    'qualifier',
    'typeArguments'
  ],
  TSIndexedAccessType: [
    'jsdoc',
    'indexType',
    'objectType'
  ],
  TSIndexSignature: [
    'jsdoc',
    'parameters',
    'typeAnnotation'
  ],
  TSInferType: [
    'jsdoc',
    'typeParameter'
  ],
  TSInstantiationExpression: [
    'jsdoc',
    'expression',
    'typeArguments'
  ],
  TSInterfaceBody: [
    'jsdoc',
    'body'
  ],
  TSInterfaceDeclaration: [
    'jsdoc',
    'id',
    'typeParameters',
    'extends',
    'body'
  ],
  TSInterfaceHeritage: [
    'jsdoc',
    'expression',
    'typeArguments'
  ],
  TSIntersectionType: [
    'jsdoc',
    'types'
  ],
  TSIntrinsicKeyword: [
    'jsdoc'
  ],
  TSLiteralType: [
    'jsdoc',
    'literal'
  ],
  TSMappedType: [
    'jsdoc',
    'nameType',
    'typeParameter',
    'typeAnnotation'
  ],
  TSMethodSignature: [
    'jsdoc',
    'typeParameters',
    'key',
    'params',
    'returnType'
  ],
  TSModuleBlock: [
    'jsdoc',
    'body'
  ],
  TSModuleDeclaration: [
    'jsdoc',
    'id',
    'body'
  ],
  TSNamedTupleMember: [
    'jsdoc',
    'label',
    'elementType'
  ],
  TSNamespaceExportDeclaration: [
    'jsdoc',
    'id'
  ],
  TSNeverKeyword: [
    'jsdoc'
  ],
  TSNonNullExpression: [
    'jsdoc',
    'expression'
  ],
  TSNullKeyword: [
    'jsdoc'
  ],
  TSNumberKeyword: [
    'jsdoc'
  ],
  TSObjectKeyword: [
    'jsdoc'
  ],
  TSOptionalType: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSParameterProperty: [
    'jsdoc',
    'decorators',
    'parameter'
  ],
  TSPrivateKeyword: [
    'jsdoc'
  ],
  TSPropertySignature: [
    'jsdoc',
    'typeAnnotation',
    'key'
  ],
  TSProtectedKeyword: [
    'jsdoc'
  ],
  TSPublicKeyword: [
    'jsdoc'
  ],
  TSQualifiedName: [
    'jsdoc',
    'left',
    'right'
  ],
  TSReadonlyKeyword: [
    'jsdoc'
  ],
  TSRestType: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSSatisfiesExpression: [
    'jsdoc',
    'typeAnnotation',
    'expression'
  ],
  TSStaticKeyword: [
    'jsdoc'
  ],
  TSStringKeyword: [
    'jsdoc'
  ],
  TSSymbolKeyword: [
    'jsdoc'
  ],
  TSTemplateLiteralType: [
    'jsdoc',
    'quasis',
    'types'
  ],
  TSThisType: [
    'jsdoc'
  ],
  TSTupleType: [
    'jsdoc',
    'elementTypes'
  ],
  TSTypeAliasDeclaration: [
    'jsdoc',
    'id',
    'typeParameters',
    'typeAnnotation'
  ],
  TSTypeAnnotation: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSTypeAssertion: [
    'jsdoc',
    'expression',
    'typeAnnotation'
  ],
  TSTypeLiteral: [
    'jsdoc',
    'members'
  ],
  TSTypeOperator: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSTypeParameter: [
    'jsdoc',
    'name',
    'constraint',
    'default'
  ],
  TSTypeParameterDeclaration: [
    'jsdoc',
    'params'
  ],
  TSTypeParameterInstantiation: [
    'jsdoc',
    'params'
  ],
  TSTypePredicate: [
    'jsdoc',
    'typeAnnotation',
    'parameterName'
  ],
  TSTypeQuery: [
    'jsdoc',
    'exprName',
    'typeArguments'
  ],
  TSTypeReference: [
    'jsdoc',
    'typeName',
    'typeArguments'
  ],
  TSUndefinedKeyword: [
    'jsdoc'
  ],
  TSUnionType: [
    'jsdoc',
    'types'
  ],
  TSUnknownKeyword: [
    'jsdoc'
  ],
  TSVoidKeyword: [
    'jsdoc'
  ],
  JsdocBlock: [
    'descriptionLines',
    'tags',
    'inlineTags'
  ],
  JsdocDescriptionLine: [],
  JsdocTypeLine: [],
  JsdocTypeMappedType: [
    'right'
  ],
  JsdocInlineTag: [],
  JsdocTag: [
    'parsedType',
    'typeLines',
    'descriptionLines',
    'inlineTags'
  ],
  JsdocTypeAny: [],
  JsdocTypeFunction: [
    'parameters',
    'returnType'
  ],
  JsdocTypeGeneric: [
    'left',
    'elements'
  ],
  JsdocTypeImport: [],
  JsdocTypeIndexSignature: [
    'right'
  ],
  JsdocTypeIntersection: [
    'elements'
  ],
  JsdocTypeKeyof: [
    'element'
  ],
  JsdocTypeJsdocObjectField: [
    'left',
    'right'
  ],
  JsdocTypeKeyValue: [
    'right'
  ],
  JsdocTypeName: [],
  JsdocTypeNamePath: [
    'left',
    'right'
  ],
  JsdocTypeNotNullable: [
    'element'
  ],
  JsdocTypeNull: [],
  JsdocTypeNullable: [
    'element'
  ],
  JsdocTypeNumber: [],
  JsdocTypeObject: [
    'elements'
  ],
  JsdocTypeObjectField: [
    'right'
  ],
  JsdocTypeOptional: [
    'element'
  ],
  JsdocTypeParenthesis: [
    'element'
  ],
  JsdocTypeSpecialNamePath: [],
  JsdocTypeStringValue: [],
  JsdocTypeSymbol: [
    'element'
  ],
  JsdocTypeTuple: [
    'elements'
  ],
  JsdocTypeTypeof: [
    'element'
  ],
  JsdocTypeUndefined: [],
  JsdocTypeUnion: [
    'elements'
  ],
  JsdocTypeUnknown: [],
  JsdocTypeVariadic: [
    'element'
  ],
  JsdocTypeProperty: [],
  JsdocTypePredicate: [
    'left',
    'right'
  ]
};

export default visitorKeysTS;
