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
    'typeParameters',
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
    'superTypeParameters',
    'implements',
    'body'
  ],
  ClassExpression: [
    'jsdoc',
    'decorators',
    'id',
    'typeParameters',
    'superClass',
    'superTypeParameters',
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
    'typeParameters',
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
    'value',
    'typeParameters'
  ],
  NewExpression: [
    'jsdoc',
    'callee',
    'typeParameters',
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
    'typeParameters',
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
    'typeParameters'
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
    'parameter',
    'qualifier',
    'typeParameters'
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
    'typeParameters'
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
    'key',
    'initializer'
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
    'typeAnnotation',
    'expression'
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
    'exprName'
  ],
  TSTypeReference: [
    'jsdoc',
    'typeName',
    'typeParameters'
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
    'tags'
  ],
  JsdocDescriptionLine: [],
  JsdocTypeLine: [],
  JsdocTag: [
    'parsedType',
    'typeLines',
    'descriptionLines'
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
  JsdocTypeIntersection: [
    'elements'
  ],
  JsdocTypeKeyof: [
    'element'
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
