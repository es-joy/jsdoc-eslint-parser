const visitorKeys = {
  ChainExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  ImportExpression: [
    'jsdoc',
    'jsdocBlocks',
    'source'
  ],
  Literal: [
    'jsdoc',
    'jsdocBlocks'
  ],
  MethodDefinition: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'value'
  ],
  Property: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'value'
  ],
  PropertyDefinition: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'typeAnnotation',
    'key',
    'value'
  ],
  ArrayExpression: [
    'jsdoc',
    'jsdocBlocks',
    'elements'
  ],
  AssignmentExpression: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  BinaryExpression: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  InterpreterDirective: [
    'jsdoc',
    'jsdocBlocks'
  ],
  Directive: [
    'jsdoc',
    'jsdocBlocks',
    'value'
  ],
  DirectiveLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  BlockStatement: [
    'jsdoc',
    'jsdocBlocks',
    'directives',
    'body'
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
    'arguments',
    'typeParameters',
    'typeArguments'
  ],
  CatchClause: [
    'jsdoc',
    'jsdocBlocks',
    'param',
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
    'test',
    'body'
  ],
  EmptyStatement: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ExpressionStatement: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  File: [
    'jsdoc',
    'jsdocBlocks',
    'program'
  ],
  ForInStatement: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right',
    'body'
  ],
  ForStatement: [
    'jsdoc',
    'jsdocBlocks',
    'init',
    'test',
    'update',
    'body'
  ],
  FunctionDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'params',
    'body',
    'returnType',
    'typeParameters'
  ],
  FunctionExpression: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'params',
    'body',
    'returnType',
    'typeParameters'
  ],
  Identifier: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation',
    'decorators'
  ],
  IfStatement: [
    'jsdoc',
    'jsdocBlocks',
    'test',
    'consequent',
    'alternate'
  ],
  LabeledStatement: [
    'jsdoc',
    'jsdocBlocks',
    'label',
    'body'
  ],
  StringLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  NumericLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  NullLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  BooleanLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  RegExpLiteral: [
    'jsdoc',
    'jsdocBlocks'
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
  NewExpression: [
    'jsdoc',
    'jsdocBlocks',
    'callee',
    'arguments',
    'typeParameters',
    'typeArguments'
  ],
  Program: [
    'jsdoc',
    'jsdocBlocks',
    'directives',
    'body'
  ],
  ObjectExpression: [
    'jsdoc',
    'jsdocBlocks',
    'properties'
  ],
  ObjectMethod: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'params',
    'body',
    'decorators',
    'returnType',
    'typeParameters'
  ],
  ObjectProperty: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value',
    'decorators'
  ],
  RestElement: [
    'jsdoc',
    'jsdocBlocks',
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
  ParenthesizedExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  SwitchCase: [
    'jsdoc',
    'jsdocBlocks',
    'test',
    'consequent'
  ],
  SwitchStatement: [
    'jsdoc',
    'jsdocBlocks',
    'discriminant',
    'cases'
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
  AssignmentPattern: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right',
    'decorators'
  ],
  ArrayPattern: [
    'jsdoc',
    'jsdocBlocks',
    'elements',
    'typeAnnotation'
  ],
  ArrowFunctionExpression: [
    'jsdoc',
    'jsdocBlocks',
    'params',
    'body',
    'returnType',
    'typeParameters'
  ],
  ClassBody: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  ClassExpression: [
    'jsdoc',
    'jsdocBlocks',
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
    'jsdocBlocks',
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
    'jsdocBlocks',
    'exported',
    'source'
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
    'source'
  ],
  ExportSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'local',
    'exported'
  ],
  ForOfStatement: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right',
    'body'
  ],
  ImportDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'specifiers',
    'source'
  ],
  ImportDefaultSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'local'
  ],
  ImportNamespaceSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'local'
  ],
  ImportSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'local',
    'imported'
  ],
  MetaProperty: [
    'jsdoc',
    'jsdocBlocks',
    'meta',
    'property'
  ],
  ClassMethod: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'params',
    'body',
    'decorators',
    'returnType',
    'typeParameters'
  ],
  ObjectPattern: [
    'jsdoc',
    'jsdocBlocks',
    'properties',
    'typeAnnotation',
    'decorators'
  ],
  SpreadElement: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  Super: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TaggedTemplateExpression: [
    'jsdoc',
    'jsdocBlocks',
    'tag',
    'quasi',
    'typeParameters'
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
  YieldExpression: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  AwaitExpression: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  Import: [
    'jsdoc',
    'jsdocBlocks'
  ],
  BigIntLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ExportNamespaceSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'exported'
  ],
  OptionalMemberExpression: [
    'jsdoc',
    'jsdocBlocks',
    'object',
    'property'
  ],
  OptionalCallExpression: [
    'jsdoc',
    'jsdocBlocks',
    'callee',
    'arguments',
    'typeParameters',
    'typeArguments'
  ],
  ClassProperty: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value',
    'typeAnnotation',
    'decorators'
  ],
  ClassAccessorProperty: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value',
    'typeAnnotation',
    'decorators'
  ],
  ClassPrivateProperty: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value',
    'decorators',
    'typeAnnotation'
  ],
  ClassPrivateMethod: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'value'
  ],
  PrivateName: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  StaticBlock: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  AnyTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ArrayTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'elementType'
  ],
  BooleanTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  BooleanLiteralTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  NullLiteralTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ClassImplements: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters'
  ],
  DeclareClass: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'extends',
    'mixins',
    'implements',
    'body'
  ],
  DeclareFunction: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  DeclareInterface: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'extends',
    'mixins',
    'implements',
    'body'
  ],
  DeclareModule: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'body'
  ],
  DeclareModuleExports: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  DeclareTypeAlias: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'right'
  ],
  DeclareOpaqueType: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'supertype'
  ],
  DeclareVariable: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  DeclareExportDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'declaration',
    'specifiers',
    'source'
  ],
  DeclareExportAllDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'source'
  ],
  DeclaredPredicate: [
    'jsdoc',
    'jsdocBlocks',
    'value'
  ],
  ExistsTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  FunctionTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'params',
    'rest',
    'returnType'
  ],
  FunctionTypeParam: [
    'jsdoc',
    'jsdocBlocks',
    'name',
    'typeAnnotation'
  ],
  GenericTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters'
  ],
  InferredPredicate: [
    'jsdoc',
    'jsdocBlocks'
  ],
  InterfaceExtends: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters'
  ],
  InterfaceDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'extends',
    'mixins',
    'implements',
    'body'
  ],
  InterfaceTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'extends',
    'body'
  ],
  IntersectionTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  MixedTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  EmptyTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  NullableTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  NumberLiteralTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  NumberTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ObjectTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'properties',
    'indexers',
    'callProperties',
    'internalSlots'
  ],
  ObjectTypeInternalSlot: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'value',
    'optional',
    'static',
    'method'
  ],
  ObjectTypeCallProperty: [
    'jsdoc',
    'jsdocBlocks',
    'value'
  ],
  ObjectTypeIndexer: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'key',
    'value',
    'variance'
  ],
  ObjectTypeProperty: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value',
    'variance'
  ],
  ObjectTypeSpreadProperty: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  OpaqueType: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'supertype',
    'impltype'
  ],
  QualifiedTypeIdentifier: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'qualification'
  ],
  StringLiteralTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  StringTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  SymbolTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ThisTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TupleTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  TypeofTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'argument'
  ],
  TypeAlias: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'right'
  ],
  TypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TypeCastExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression',
    'typeAnnotation'
  ],
  TypeParameter: [
    'jsdoc',
    'jsdocBlocks',
    'bound',
    'default',
    'variance'
  ],
  TypeParameterDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'params'
  ],
  TypeParameterInstantiation: [
    'jsdoc',
    'jsdocBlocks',
    'params'
  ],
  UnionTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  Variance: [
    'jsdoc',
    'jsdocBlocks'
  ],
  VoidTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks'
  ],
  EnumDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'body'
  ],
  EnumBooleanBody: [
    'jsdoc',
    'jsdocBlocks',
    'members'
  ],
  EnumNumberBody: [
    'jsdoc',
    'jsdocBlocks',
    'members'
  ],
  EnumStringBody: [
    'jsdoc',
    'jsdocBlocks',
    'members'
  ],
  EnumSymbolBody: [
    'jsdoc',
    'jsdocBlocks',
    'members'
  ],
  EnumBooleanMember: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  EnumNumberMember: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'init'
  ],
  EnumStringMember: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'init'
  ],
  EnumDefaultedMember: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  IndexedAccessType: [
    'jsdoc',
    'jsdocBlocks',
    'objectType',
    'indexType'
  ],
  OptionalIndexedAccessType: [
    'jsdoc',
    'jsdocBlocks',
    'objectType',
    'indexType'
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
  JSXSpreadChild: [
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
  JSXOpeningFragment: [
    'jsdoc',
    'jsdocBlocks'
  ],
  JSXClosingFragment: [
    'jsdoc',
    'jsdocBlocks'
  ],
  Noop: [
    'jsdoc',
    'jsdocBlocks'
  ],
  Placeholder: [
    'jsdoc',
    'jsdocBlocks'
  ],
  V8IntrinsicIdentifier: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ArgumentPlaceholder: [
    'jsdoc',
    'jsdocBlocks'
  ],
  BindExpression: [
    'jsdoc',
    'jsdocBlocks',
    'object',
    'callee'
  ],
  ImportAttribute: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'value'
  ],
  Decorator: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  DoExpression: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  ExportDefaultSpecifier: [
    'jsdoc',
    'jsdocBlocks',
    'exported'
  ],
  RecordExpression: [
    'jsdoc',
    'jsdocBlocks',
    'properties'
  ],
  TupleExpression: [
    'jsdoc',
    'jsdocBlocks',
    'elements'
  ],
  DecimalLiteral: [
    'jsdoc',
    'jsdocBlocks'
  ],
  ModuleExpression: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  TopicReference: [
    'jsdoc',
    'jsdocBlocks'
  ],
  PipelineTopicExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  PipelineBareFunction: [
    'jsdoc',
    'jsdocBlocks',
    'callee'
  ],
  PipelinePrimaryTopicReference: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSParameterProperty: [
    'jsdoc',
    'jsdocBlocks',
    'parameter'
  ],
  TSDeclareFunction: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSDeclareMethod: [
    'jsdoc',
    'jsdocBlocks',
    'decorators',
    'key',
    'typeParameters',
    'params',
    'returnType'
  ],
  TSQualifiedName: [
    'jsdoc',
    'jsdocBlocks',
    'left',
    'right'
  ],
  TSCallSignatureDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSConstructSignatureDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSPropertySignature: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'typeAnnotation',
    'initializer'
  ],
  TSMethodSignature: [
    'jsdoc',
    'jsdocBlocks',
    'key',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSIndexSignature: [
    'jsdoc',
    'jsdocBlocks',
    'parameters',
    'typeAnnotation'
  ],
  TSAnyKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSBooleanKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSBigIntKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSIntrinsicKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSNeverKeyword: [
    'jsdoc',
    'jsdocBlocks'
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
  TSStringKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSSymbolKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSUndefinedKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSUnknownKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSVoidKeyword: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSThisType: [
    'jsdoc',
    'jsdocBlocks'
  ],
  TSFunctionType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSConstructorType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameters',
    'parameters',
    'typeAnnotation'
  ],
  TSTypeReference: [
    'jsdoc',
    'jsdocBlocks',
    'typeName',
    'typeParameters'
  ],
  TSTypePredicate: [
    'jsdoc',
    'jsdocBlocks',
    'parameterName',
    'typeAnnotation'
  ],
  TSTypeQuery: [
    'jsdoc',
    'jsdocBlocks',
    'exprName'
  ],
  TSTypeLiteral: [
    'jsdoc',
    'jsdocBlocks',
    'members'
  ],
  TSArrayType: [
    'jsdoc',
    'jsdocBlocks',
    'elementType'
  ],
  TSTupleType: [
    'jsdoc',
    'jsdocBlocks',
    'elementTypes'
  ],
  TSOptionalType: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSRestType: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSNamedTupleMember: [
    'jsdoc',
    'jsdocBlocks',
    'label',
    'elementType'
  ],
  TSUnionType: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  TSIntersectionType: [
    'jsdoc',
    'jsdocBlocks',
    'types'
  ],
  TSConditionalType: [
    'jsdoc',
    'jsdocBlocks',
    'checkType',
    'extendsType',
    'trueType',
    'falseType'
  ],
  TSInferType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameter'
  ],
  TSParenthesizedType: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSTypeOperator: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSIndexedAccessType: [
    'jsdoc',
    'jsdocBlocks',
    'objectType',
    'indexType'
  ],
  TSMappedType: [
    'jsdoc',
    'jsdocBlocks',
    'typeParameter',
    'typeAnnotation',
    'nameType'
  ],
  TSLiteralType: [
    'jsdoc',
    'jsdocBlocks',
    'literal'
  ],
  TSExpressionWithTypeArguments: [
    'jsdoc',
    'jsdocBlocks',
    'expression',
    'typeParameters'
  ],
  TSInterfaceDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'extends',
    'body'
  ],
  TSInterfaceBody: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  TSTypeAliasDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'typeParameters',
    'typeAnnotation'
  ],
  TSAsExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression',
    'typeAnnotation'
  ],
  TSTypeAssertion: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation',
    'expression'
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
  TSModuleDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'body'
  ],
  TSModuleBlock: [
    'jsdoc',
    'jsdocBlocks',
    'body'
  ],
  TSImportType: [
    'jsdoc',
    'jsdocBlocks',
    'argument',
    'qualifier',
    'typeParameters'
  ],
  TSImportEqualsDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id',
    'moduleReference'
  ],
  TSExternalModuleReference: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSNonNullExpression: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSExportAssignment: [
    'jsdoc',
    'jsdocBlocks',
    'expression'
  ],
  TSNamespaceExportDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'id'
  ],
  TSTypeAnnotation: [
    'jsdoc',
    'jsdocBlocks',
    'typeAnnotation'
  ],
  TSTypeParameterInstantiation: [
    'jsdoc',
    'jsdocBlocks',
    'params'
  ],
  TSTypeParameterDeclaration: [
    'jsdoc',
    'jsdocBlocks',
    'params'
  ],
  TSTypeParameter: [
    'jsdoc',
    'jsdocBlocks',
    'constraint',
    'default'
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

export default visitorKeys;
