const visitorKeysTS = {
  AssignmentExpression: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  AssignmentPattern: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'left',
    'right',
    'typeAnnotation'
  ],
  ArrayExpression: [
    'jsdoc',
    'jsdocBlocks',
    'elements'
  ],
  ArrayPattern: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'elements',
    'typeAnnotation'
  ],
  ArrowFunctionExpression: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  AwaitExpression: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  BlockStatement: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  BinaryExpression: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  BreakStatement: [
    'jsdoc',
    'jsdocBlocks',
    'label'
  ],
  CallExpression: [
    'jsdoc',
    'jsdocBlocks',
    'callee',
    'typeParameters',
    'arguments'
  ],
  CatchClause: [
    'jsdoc',
    'jsdocBlocks',
    'param',
    'body'
  ],
  ChainExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  ClassBody: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  ClassDeclaration: [
    'jsdoc',
    'jsdocBlocks',
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
    'jsdocBlocks',
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
    'jsdocBlocks',
    'test',
    'consequent',
    'alternate'
  ],
  ContinueStatement: [
    'jsdoc',
    'jsdocBlocks',
    'label'
  ],
  DebuggerStatement: [
    'jsdoc',
    'jsdocBlocks'
  ],
  DoWhileStatement: [
    'jsdoc',
    'jsdocBlocks',
    'body',
    'test'
  ],
  EmptyStatement: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ExportAllDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'exported',
    'source',
    'assertions'
  ],
  ExportDefaultDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'declaration'
  ],
  ExportNamedDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'declaration',
    'specifiers',
    'source',
    'assertions'
  ],
  ExportSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'exported',
    'local'
  ],
  ExpressionStatement: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  ExperimentalRestProperty: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  ExperimentalSpreadProperty: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  ForStatement: [
    'jsdoc',
    'jsdocBlocks',
    'init',
    'test',
    'update',
    'body'
  ],
  ForInStatement: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right',
    'body'
  ],
  ForOfStatement: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right',
    'body'
  ],
  FunctionDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  FunctionExpression: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  Identifier: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'typeAnnotation'
  ],
  IfStatement: [
    'jsdoc',
    'jsdocBlocks',
    'test',
    'consequent',
    'alternate'
  ],
  ImportDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'specifiers',
    'source',
    'assertions'
  ],
  ImportDefaultSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'local'
  ],
  ImportExpression: [
    'jsdoc',
    'jsdocBlocks',
    'source',
    'attributes'
  ],
  ImportNamespaceSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'local'
  ],
  ImportSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'imported',
    'local'
  ],
  JSXAttribute: [
    'jsdoc',
    'jsdocBlocks',
    'name',
    'value'
  ],
  JSXClosingElement: [
    'jsdoc',
    'jsdocBlocks',
    'name'
  ],
  JSXElement: [
    'jsdoc',
    'jsdocBlocks',
    'openingElement',
    'children',
    'closingElement'
  ],
  JSXEmptyExpression: [
    'jsdoc',
    'jsdocBlocks'
  ],
  JSXExpressionContainer: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  JSXIdentifier: [
    'jsdoc',
    'jsdocBlocks'
  ],
  JSXMemberExpression: [
    'jsdoc',
    'jsdocBlocks',
    'object',
    'property'
  ],
  JSXNamespacedName: [
    'jsdoc',
    'jsdocBlocks',
    'namespace',
    'name'
  ],
  JSXOpeningElement: [
    'jsdoc',
    'jsdocBlocks',
    'name',
    'typeParameters',
    'attributes'
  ],
  JSXSpreadAttribute: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  JSXText: [
    'jsdoc',
    'jsdocBlocks'
  ],
  JSXFragment: [
    'jsdoc',
    'jsdocBlocks',
    'openingFragment',
    'children',
    'closingFragment'
  ],
  JSXClosingFragment: [
    'jsdoc',
    'jsdocBlocks'
  ],
  JSXOpeningFragment: [
    'jsdoc',
    'jsdocBlocks'
  ],
  Literal: [
    'jsdoc',
    'jsdocBlocks'
  ],
  LabeledStatement: [
    'jsdoc',
    'jsdocBlocks',
    'label',
    'body'
  ],
  LogicalExpression: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  MemberExpression: [
    'jsdoc',
    'jsdocBlocks',
    'object',
    'property'
  ],
  MetaProperty: [
    'jsdoc',
    'jsdocBlocks',
    'meta',
    'property'
  ],
  MethodDefinition: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'value',
    'typeParameters'
  ],
  NewExpression: [
    'jsdoc',
    'jsdocBlocks',
    'callee',
    'typeParameters',
    'arguments'
  ],
  ObjectExpression: [
    'jsdoc',
    'jsdocBlocks',
    'properties'
  ],
  ObjectPattern: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'properties',
    'typeAnnotation'
  ],
  PrivateIdentifier: [
    'jsdoc',
    'jsdocBlocks'
  ],
  Program: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  Property: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value'
  ],
  PropertyDefinition: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'typeAnnotation',
    'value'
  ],
  RestElement: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'argument',
    'typeAnnotation'
  ],
  ReturnStatement: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  SequenceExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expressions'
  ],
  SpreadElement: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  StaticBlock: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  Super: [
    'jsdoc',
    'jsdocBlocks'
  ],
  SwitchStatement: [
    'jsdoc',
    'jsdocBlocks',
    'discriminant',
    'cases'
  ],
  SwitchCase: [
    'jsdoc',
    'jsdocBlocks',
    'test',
    'consequent'
  ],
  TaggedTemplateExpression: [
    'jsdoc',
    'jsdocBlocks',
    'tag',
    'typeParameters',
    'quasi'
  ],
  TemplateElement: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TemplateLiteral: [
    'jsdoc',
    'jsdocBlocks',
    'quasis',
    'expressions'
  ],
  ThisExpression: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ThrowStatement: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  TryStatement: [
    'jsdoc',
    'jsdocBlocks',
    'block',
    'handler',
    'finalizer'
  ],
  UnaryExpression: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  UpdateExpression: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  VariableDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'declarations'
  ],
  VariableDeclarator: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'init'
  ],
  WhileStatement: [
    'jsdoc',
    'jsdocBlocks',
    'test',
    'body'
  ],
  WithStatement: [
    'jsdoc',
    'jsdocBlocks',
    'object',
    'body'
  ],
  YieldExpression: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  ImportAttribute: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value'
  ],
  JSXSpreadChild: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  Decorator: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSAbstractKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSAbstractMethodDefinition: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value'
  ],
  TSAbstractPropertyDefinition: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'typeAnnotation'
  ],
  TSAnyKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSArrayType: [
    'jsdoc',
    'jsdocBlocks',
    'elementType'
  ],
  TSAsExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression',
    'typeAnnotation'
  ],
  TSAsyncKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSBigIntKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSBooleanKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSCallSignatureDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSClassImplements: [
    'jsdoc',
    'jsdocBlocks',
    'expression',
    'typeParameters'
  ],
  TSConditionalType: [
    'jsdoc',
    'jsdocBlocks',
    'checkType',
    'extendsType',
    'trueType',
    'falseType'
  ],
  TSConstructorType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSConstructSignatureDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSDeclareFunction: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'params',
    'returnType',
    'body'
  ],
  TSDeclareKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSEmptyBodyFunctionExpression: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSEnumDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'members'
  ],
  TSEnumMember: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'initializer'
  ],
  TSExportAssignment: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSExportKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSExternalModuleReference: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSFunctionType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSImportEqualsDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'moduleReference'
  ],
  TSImportType: [
    'jsdoc',
    'jsdocBlocks',
    'parameter',
    'qualifier',
    'typeParameters'
  ],
  TSIndexedAccessType: [
    'jsdoc',
    'jsdocBlocks',
    'indexType',
    'objectType'
  ],
  TSIndexSignature: [
    'jsdoc',
    'jsdocBlocks',
    'parameters',
    'typeAnnotation'
  ],
  TSInferType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameter'
  ],
  TSInterfaceBody: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  TSInterfaceDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'extends',
    'body'
  ],
  TSInterfaceHeritage: [
    'jsdoc',
    'jsdocBlocks',
    'expression',
    'typeParameters'
  ],
  TSIntersectionType: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  TSIntrinsicKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSLiteralType: [
    'jsdoc',
    'jsdocBlocks',
    'literal'
  ],
  TSMappedType: [
    'jsdoc',
    'jsdocBlocks',
    'nameType',
    'typeParameter',
    'typeAnnotation'
  ],
  TSMethodSignature: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'key',
    'params',
    'returnType'
  ],
  TSModuleBlock: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  TSModuleDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'body'
  ],
  TSNamedTupleMember: [
    'jsdoc',
    'jsdocBlocks',
    'label',
    'elementType'
  ],
  TSNamespaceExportDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  TSNeverKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSNonNullExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSNullKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSNumberKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSObjectKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSOptionalType: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSParameterProperty: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'parameter'
  ],
  TSPrivateKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSPropertySignature: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation',
    'key',
    'initializer'
  ],
  TSProtectedKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSPublicKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSQualifiedName: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  TSReadonlyKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSRestType: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSStaticKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSStringKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSSymbolKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSTemplateLiteralType: [
    'jsdoc',
    'jsdocBlocks',
    'quasis',
    'types'
  ],
  TSThisType: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSTupleType: [
    'jsdoc',
    'jsdocBlocks',
    'elementTypes'
  ],
  TSTypeAliasDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'typeAnnotation'
  ],
  TSTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSTypeAssertion: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation',
    'expression'
  ],
  TSTypeLiteral: [
    'jsdoc',
    'jsdocBlocks',
    'members'
  ],
  TSTypeOperator: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSTypeParameter: [
    'jsdoc',
    'jsdocBlocks',
    'name',
    'constraint',
    'default'
  ],
  TSTypeParameterDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'params'
  ],
  TSTypeParameterInstantiation: [
    'jsdoc',
    'jsdocBlocks',
    'params'
  ],
  TSTypePredicate: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation',
    'parameterName'
  ],
  TSTypeQuery: [
    'jsdoc',
    'jsdocBlocks',
    'exprName'
  ],
  TSTypeReference: [
    'jsdoc',
    'jsdocBlocks',
    'typeName',
    'typeParameters'
  ],
  TSUndefinedKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSUnionType: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  TSUnknownKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSVoidKeyword: [
    'jsdoc',
    'jsdocBlocks'
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
