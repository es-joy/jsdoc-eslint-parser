const visitorKeys = {
  ChainExpression: [
    'jsdoc',
    'expression'
  ],
  ImportExpression: [
    'jsdoc',
    'source'
  ],
  Literal: [
    'jsdoc'
  ],
  MethodDefinition: [
    'jsdoc',
    'decorators',
    'key',
    'value'
  ],
  Property: [
    'jsdoc',
    'decorators',
    'key',
    'value'
  ],
  PropertyDefinition: [
    'jsdoc',
    'decorators',
    'typeAnnotation',
    'key',
    'value'
  ],
  ArrayExpression: [
    'jsdoc',
    'elements'
  ],
  AssignmentExpression: [
    'jsdoc',
    'left',
    'right'
  ],
  BinaryExpression: [
    'jsdoc',
    'left',
    'right'
  ],
  InterpreterDirective: [
    'jsdoc'
  ],
  Directive: [
    'jsdoc',
    'value'
  ],
  DirectiveLiteral: [
    'jsdoc'
  ],
  BlockStatement: [
    'jsdoc',
    'directives',
    'body'
  ],
  BreakStatement: [
    'jsdoc',
    'label'
  ],
  CallExpression: [
    'jsdoc',
    'callee',
    'arguments',
    'typeParameters',
    'typeArguments'
  ],
  CatchClause: [
    'jsdoc',
    'param',
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
    'test',
    'body'
  ],
  EmptyStatement: [
    'jsdoc'
  ],
  ExpressionStatement: [
    'jsdoc',
    'expression'
  ],
  File: [
    'jsdoc',
    'program'
  ],
  ForInStatement: [
    'jsdoc',
    'left',
    'right',
    'body'
  ],
  ForStatement: [
    'jsdoc',
    'init',
    'test',
    'update',
    'body'
  ],
  FunctionDeclaration: [
    'jsdoc',
    'id',
    'params',
    'body',
    'returnType',
    'typeParameters'
  ],
  FunctionExpression: [
    'jsdoc',
    'id',
    'params',
    'body',
    'returnType',
    'typeParameters'
  ],
  Identifier: [
    'jsdoc',
    'typeAnnotation',
    'decorators'
  ],
  IfStatement: [
    'jsdoc',
    'test',
    'consequent',
    'alternate'
  ],
  LabeledStatement: [
    'jsdoc',
    'label',
    'body'
  ],
  StringLiteral: [
    'jsdoc'
  ],
  NumericLiteral: [
    'jsdoc'
  ],
  NullLiteral: [
    'jsdoc'
  ],
  BooleanLiteral: [
    'jsdoc'
  ],
  RegExpLiteral: [
    'jsdoc'
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
  NewExpression: [
    'jsdoc',
    'callee',
    'arguments',
    'typeParameters',
    'typeArguments'
  ],
  Program: [
    'jsdocBlocks',
    'directives',
    'body'
  ],
  ObjectExpression: [
    'jsdoc',
    'properties'
  ],
  ObjectMethod: [
    'jsdoc',
    'key',
    'params',
    'body',
    'decorators',
    'returnType',
    'typeParameters'
  ],
  ObjectProperty: [
    'jsdoc',
    'key',
    'value',
    'decorators'
  ],
  RestElement: [
    'jsdoc',
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
  ParenthesizedExpression: [
    'jsdoc',
    'expression'
  ],
  SwitchCase: [
    'jsdoc',
    'test',
    'consequent'
  ],
  SwitchStatement: [
    'jsdoc',
    'discriminant',
    'cases'
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
  AssignmentPattern: [
    'jsdoc',
    'left',
    'right',
    'decorators'
  ],
  ArrayPattern: [
    'jsdoc',
    'elements',
    'typeAnnotation'
  ],
  ArrowFunctionExpression: [
    'jsdoc',
    'params',
    'body',
    'returnType',
    'typeParameters'
  ],
  ClassBody: [
    'jsdoc',
    'body'
  ],
  ClassExpression: [
    'jsdoc',
    'id',
    'body',
    'superClass',
    'mixins',
    'typeParameters',
    'superTypeParameters',
    'implements',
    'decorators'
  ],
  ClassDeclaration: [
    'jsdoc',
    'id',
    'body',
    'superClass',
    'mixins',
    'typeParameters',
    'superTypeParameters',
    'implements',
    'decorators'
  ],
  ExportAllDeclaration: [
    'jsdoc',
    'exported',
    'source'
  ],
  ExportDefaultDeclaration: [
    'jsdoc',
    'declaration'
  ],
  ExportNamedDeclaration: [
    'jsdoc',
    'declaration',
    'specifiers',
    'source'
  ],
  ExportSpecifier: [
    'jsdoc',
    'local',
    'exported'
  ],
  ForOfStatement: [
    'jsdoc',
    'left',
    'right',
    'body'
  ],
  ImportDeclaration: [
    'jsdoc',
    'specifiers',
    'source'
  ],
  ImportDefaultSpecifier: [
    'jsdoc',
    'local'
  ],
  ImportNamespaceSpecifier: [
    'jsdoc',
    'local'
  ],
  ImportSpecifier: [
    'jsdoc',
    'local',
    'imported'
  ],
  MetaProperty: [
    'jsdoc',
    'meta',
    'property'
  ],
  ClassMethod: [
    'jsdoc',
    'key',
    'params',
    'body',
    'decorators',
    'returnType',
    'typeParameters'
  ],
  ObjectPattern: [
    'jsdoc',
    'properties',
    'typeAnnotation',
    'decorators'
  ],
  SpreadElement: [
    'jsdoc',
    'argument'
  ],
  Super: [
    'jsdoc'
  ],
  TaggedTemplateExpression: [
    'jsdoc',
    'tag',
    'quasi',
    'typeParameters'
  ],
  TemplateElement: [
    'jsdoc'
  ],
  TemplateLiteral: [
    'jsdoc',
    'quasis',
    'expressions'
  ],
  YieldExpression: [
    'jsdoc',
    'argument'
  ],
  AwaitExpression: [
    'jsdoc',
    'argument'
  ],
  Import: [
    'jsdoc'
  ],
  BigIntLiteral: [
    'jsdoc'
  ],
  ExportNamespaceSpecifier: [
    'jsdoc',
    'exported'
  ],
  OptionalMemberExpression: [
    'jsdoc',
    'object',
    'property'
  ],
  OptionalCallExpression: [
    'jsdoc',
    'callee',
    'arguments',
    'typeParameters',
    'typeArguments'
  ],
  ClassProperty: [
    'jsdoc',
    'key',
    'value',
    'typeAnnotation',
    'decorators'
  ],
  ClassAccessorProperty: [
    'jsdoc',
    'key',
    'value',
    'typeAnnotation',
    'decorators'
  ],
  ClassPrivateProperty: [
    'jsdoc',
    'key',
    'value',
    'decorators',
    'typeAnnotation'
  ],
  ClassPrivateMethod: [
    'jsdoc',
    'decorators',
    'key',
    'value'
  ],
  PrivateName: [
    'jsdoc',
    'id'
  ],
  StaticBlock: [
    'jsdoc',
    'body'
  ],
  AnyTypeAnnotation: [
    'jsdoc'
  ],
  ArrayTypeAnnotation: [
    'jsdoc',
    'elementType'
  ],
  BooleanTypeAnnotation: [
    'jsdoc'
  ],
  BooleanLiteralTypeAnnotation: [
    'jsdoc'
  ],
  NullLiteralTypeAnnotation: [
    'jsdoc'
  ],
  ClassImplements: [
    'jsdoc',
    'id',
    'typeParameters'
  ],
  DeclareClass: [
    'jsdoc',
    'id',
    'typeParameters',
    'extends',
    'mixins',
    'implements',
    'body'
  ],
  DeclareFunction: [
    'jsdoc',
    'id'
  ],
  DeclareInterface: [
    'jsdoc',
    'id',
    'typeParameters',
    'extends',
    'body'
  ],
  DeclareModule: [
    'jsdoc',
    'id',
    'body'
  ],
  DeclareModuleExports: [
    'jsdoc',
    'typeAnnotation'
  ],
  DeclareTypeAlias: [
    'jsdoc',
    'id',
    'typeParameters',
    'right'
  ],
  DeclareOpaqueType: [
    'jsdoc',
    'id',
    'typeParameters',
    'supertype'
  ],
  DeclareVariable: [
    'jsdoc',
    'id'
  ],
  DeclareExportDeclaration: [
    'jsdoc',
    'declaration',
    'specifiers',
    'source'
  ],
  DeclareExportAllDeclaration: [
    'jsdoc',
    'source'
  ],
  DeclaredPredicate: [
    'jsdoc',
    'value'
  ],
  ExistsTypeAnnotation: [
    'jsdoc'
  ],
  FunctionTypeAnnotation: [
    'jsdoc',
    'typeParameters',
    'params',
    'rest',
    'returnType'
  ],
  FunctionTypeParam: [
    'jsdoc',
    'name',
    'typeAnnotation'
  ],
  GenericTypeAnnotation: [
    'jsdoc',
    'id',
    'typeParameters'
  ],
  InferredPredicate: [
    'jsdoc'
  ],
  InterfaceExtends: [
    'jsdoc',
    'id',
    'typeParameters'
  ],
  InterfaceDeclaration: [
    'jsdoc',
    'id',
    'typeParameters',
    'extends',
    'body'
  ],
  InterfaceTypeAnnotation: [
    'jsdoc',
    'extends',
    'body'
  ],
  IntersectionTypeAnnotation: [
    'jsdoc',
    'types'
  ],
  MixedTypeAnnotation: [
    'jsdoc'
  ],
  EmptyTypeAnnotation: [
    'jsdoc'
  ],
  NullableTypeAnnotation: [
    'jsdoc',
    'typeAnnotation'
  ],
  NumberLiteralTypeAnnotation: [
    'jsdoc'
  ],
  NumberTypeAnnotation: [
    'jsdoc'
  ],
  ObjectTypeAnnotation: [
    'jsdoc',
    'properties',
    'indexers',
    'callProperties',
    'internalSlots'
  ],
  ObjectTypeInternalSlot: [
    'jsdoc',
    'id',
    'value',
    'optional',
    'static',
    'method'
  ],
  ObjectTypeCallProperty: [
    'jsdoc',
    'value'
  ],
  ObjectTypeIndexer: [
    'jsdoc',
    'id',
    'key',
    'value',
    'variance'
  ],
  ObjectTypeProperty: [
    'jsdoc',
    'key',
    'value',
    'variance'
  ],
  ObjectTypeSpreadProperty: [
    'jsdoc',
    'argument'
  ],
  OpaqueType: [
    'jsdoc',
    'id',
    'typeParameters',
    'supertype',
    'impltype'
  ],
  QualifiedTypeIdentifier: [
    'jsdoc',
    'id',
    'qualification'
  ],
  StringLiteralTypeAnnotation: [
    'jsdoc'
  ],
  StringTypeAnnotation: [
    'jsdoc'
  ],
  SymbolTypeAnnotation: [
    'jsdoc'
  ],
  ThisTypeAnnotation: [
    'jsdoc'
  ],
  TupleTypeAnnotation: [
    'jsdoc',
    'types'
  ],
  TypeofTypeAnnotation: [
    'jsdoc',
    'argument'
  ],
  TypeAlias: [
    'jsdoc',
    'id',
    'typeParameters',
    'right'
  ],
  TypeAnnotation: [
    'jsdoc',
    'typeAnnotation'
  ],
  TypeCastExpression: [
    'jsdoc',
    'expression',
    'typeAnnotation'
  ],
  TypeParameter: [
    'jsdoc',
    'bound',
    'default',
    'variance'
  ],
  TypeParameterDeclaration: [
    'jsdoc',
    'params'
  ],
  TypeParameterInstantiation: [
    'jsdoc',
    'params'
  ],
  UnionTypeAnnotation: [
    'jsdoc',
    'types'
  ],
  Variance: [
    'jsdoc'
  ],
  VoidTypeAnnotation: [
    'jsdoc'
  ],
  EnumDeclaration: [
    'jsdoc',
    'id',
    'body'
  ],
  EnumBooleanBody: [
    'jsdoc',
    'members'
  ],
  EnumNumberBody: [
    'jsdoc',
    'members'
  ],
  EnumStringBody: [
    'jsdoc',
    'members'
  ],
  EnumSymbolBody: [
    'jsdoc',
    'members'
  ],
  EnumBooleanMember: [
    'jsdoc',
    'id'
  ],
  EnumNumberMember: [
    'jsdoc',
    'id',
    'init'
  ],
  EnumStringMember: [
    'jsdoc',
    'id',
    'init'
  ],
  EnumDefaultedMember: [
    'jsdoc',
    'id'
  ],
  IndexedAccessType: [
    'jsdoc',
    'objectType',
    'indexType'
  ],
  OptionalIndexedAccessType: [
    'jsdoc',
    'objectType',
    'indexType'
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
  JSXSpreadChild: [
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
  JSXOpeningFragment: [
    'jsdoc'
  ],
  JSXClosingFragment: [
    'jsdoc'
  ],
  Noop: [
    'jsdoc'
  ],
  Placeholder: [
    'jsdoc'
  ],
  V8IntrinsicIdentifier: [
    'jsdoc'
  ],
  ArgumentPlaceholder: [
    'jsdoc'
  ],
  BindExpression: [
    'jsdoc',
    'object',
    'callee'
  ],
  ImportAttribute: [
    'jsdoc',
    'key',
    'value'
  ],
  Decorator: [
    'jsdoc',
    'expression'
  ],
  DoExpression: [
    'jsdoc',
    'body'
  ],
  ExportDefaultSpecifier: [
    'jsdoc',
    'exported'
  ],
  RecordExpression: [
    'jsdoc',
    'properties'
  ],
  TupleExpression: [
    'jsdoc',
    'elements'
  ],
  DecimalLiteral: [
    'jsdoc'
  ],
  ModuleExpression: [
    'jsdoc',
    'body'
  ],
  TopicReference: [
    'jsdoc'
  ],
  PipelineTopicExpression: [
    'jsdoc',
    'expression'
  ],
  PipelineBareFunction: [
    'jsdoc',
    'callee'
  ],
  PipelinePrimaryTopicReference: [
    'jsdoc'
  ],
  TSParameterProperty: [
    'jsdoc',
    'parameter'
  ],
  TSDeclareFunction: [
    'jsdoc',
    'id',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSDeclareMethod: [
    'jsdoc',
    'decorators',
    'key',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSQualifiedName: [
    'jsdoc',
    'left',
    'right'
  ],
  TSCallSignatureDeclaration: [
    'jsdoc',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSConstructSignatureDeclaration: [
    'jsdoc',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSPropertySignature: [
    'jsdoc',
    'key',
    'typeAnnotation',
    'initializer'
  ],
  TSMethodSignature: [
    'jsdoc',
    'key',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSIndexSignature: [
    'jsdoc',
    'parameters',
    'typeAnnotation'
  ],
  TSAnyKeyword: [
    'jsdoc'
  ],
  TSBooleanKeyword: [
    'jsdoc'
  ],
  TSBigIntKeyword: [
    'jsdoc'
  ],
  TSIntrinsicKeyword: [
    'jsdoc'
  ],
  TSNeverKeyword: [
    'jsdoc'
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
  TSStringKeyword: [
    'jsdoc'
  ],
  TSSymbolKeyword: [
    'jsdoc'
  ],
  TSUndefinedKeyword: [
    'jsdoc'
  ],
  TSUnknownKeyword: [
    'jsdoc'
  ],
  TSVoidKeyword: [
    'jsdoc'
  ],
  TSThisType: [
    'jsdoc'
  ],
  TSFunctionType: [
    'jsdoc',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSConstructorType: [
    'jsdoc',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSTypeReference: [
    'jsdoc',
    'typeName',
    'typeParameters'
  ],
  TSTypePredicate: [
    'jsdoc',
    'parameterName',
    'typeAnnotation'
  ],
  TSTypeQuery: [
    'jsdoc',
    'exprName',
    'typeParameters'
  ],
  TSTypeLiteral: [
    'jsdoc',
    'members'
  ],
  TSArrayType: [
    'jsdoc',
    'elementType'
  ],
  TSTupleType: [
    'jsdoc',
    'elementTypes'
  ],
  TSOptionalType: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSRestType: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSSatisfiesExpression: [
    'jsdoc',
    'expression',
    'typeAnnotation'
  ],
  TSNamedTupleMember: [
    'jsdoc',
    'label',
    'elementType'
  ],
  TSUnionType: [
    'jsdoc',
    'types'
  ],
  TSIntersectionType: [
    'jsdoc',
    'types'
  ],
  TSConditionalType: [
    'jsdoc',
    'checkType',
    'extendsType',
    'trueType',
    'falseType'
  ],
  TSInferType: [
    'jsdoc',
    'typeParameter'
  ],
  TSParenthesizedType: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSTypeOperator: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSIndexedAccessType: [
    'jsdoc',
    'objectType',
    'indexType'
  ],
  TSMappedType: [
    'jsdoc',
    'typeParameter',
    'typeAnnotation',
    'nameType'
  ],
  TSLiteralType: [
    'jsdoc',
    'literal'
  ],
  TSExpressionWithTypeArguments: [
    'jsdoc',
    'expression',
    'typeParameters'
  ],
  TSInterfaceDeclaration: [
    'jsdoc',
    'id',
    'typeParameters',
    'extends',
    'body'
  ],
  TSInstantiationExpression: [
    'jsdoc',
    'expression',
    'typeParameters'
  ],
  TSInterfaceBody: [
    'jsdoc',
    'body'
  ],
  TSTypeAliasDeclaration: [
    'jsdoc',
    'id',
    'typeParameters',
    'typeAnnotation'
  ],
  TSAsExpression: [
    'jsdoc',
    'expression',
    'typeAnnotation'
  ],
  TSTypeAssertion: [
    'jsdoc',
    'typeAnnotation',
    'expression'
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
  TSModuleDeclaration: [
    'jsdoc',
    'id',
    'body'
  ],
  TSModuleBlock: [
    'jsdoc',
    'body'
  ],
  TSImportType: [
    'jsdoc',
    'argument',
    'qualifier',
    'typeParameters'
  ],
  TSImportEqualsDeclaration: [
    'jsdoc',
    'id',
    'moduleReference'
  ],
  TSExternalModuleReference: [
    'jsdoc',
    'expression'
  ],
  TSNonNullExpression: [
    'jsdoc',
    'expression'
  ],
  TSExportAssignment: [
    'jsdoc',
    'expression'
  ],
  TSNamespaceExportDeclaration: [
    'jsdoc',
    'id'
  ],
  TSTypeAnnotation: [
    'jsdoc',
    'typeAnnotation'
  ],
  TSTypeParameterInstantiation: [
    'jsdoc',
    'params'
  ],
  TSTypeParameterDeclaration: [
    'jsdoc',
    'params'
  ],
  TSTypeParameter: [
    'jsdoc',
    'constraint',
    'default'
  ],
  JsdocBlock: [
    'descriptionLines',
    'tags',
    'inlineTags'
  ],
  JsdocDescriptionLine: [],
  JsdocInlineTag: [],
  JsdocTypeLine: [],
  JsdocTypeMappedType: [
    'right'
  ],
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
  JsdocTypeObjectField: [
    'right'
  ],
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

export default visitorKeys;
