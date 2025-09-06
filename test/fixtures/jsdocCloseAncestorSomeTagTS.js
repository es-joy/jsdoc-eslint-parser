import visitorKeys from './visitorKeysTS.js';

const jsdoc = {
  delimiter: '/**',
  delimiterLineBreak: '',
  description: '',
  descriptionLines: [],
  terminal: '*/',
  endLine: 0,
  lastDescriptionLine: 0,
  lineEnd: '',
  loc: {
    end: {
      column: 34,
      line: 2
    },
    start: {
      column: 19,
      line: 2
    }
  },
  preterminalLineBreak: '',
  postDelimiter: ' ',
  range: [
    20,
    35
  ],
  tags: [
    {
      delimiter: '',
      description: '',
      descriptionLines: [],
      lineEnd: '',
      loc: {
        end: {
          column: 34,
          line: 2
        },
        start: {
          column: 19,
          line: 2
        }
      },
      name: '',
      parsedType: null,
      postDelimiter: '',
      postName: '',
      postTag: ' ',
      postType: '',
      range: [
        20,
        35
      ],
      rawType: '',
      initial: '',
      tag: 'someTag',
      inlineTags: [],
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  initial: ' ',
  hasPreterminalDescription: 0,
  hasPreterminalTagDescription: 1,
  inlineTags: [],
  type: 'JsdocBlock'
};

const jsdoc2 = {
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  terminal: '*/',
  endLine: 0,
  lastDescriptionLine: 0,
  lineEnd: '',
  loc: {
    end: {
      column: 21,
      line: 2
    },
    start: {
      column: 6,
      line: 2
    }
  },
  postDelimiter: ' ',
  range: [
    7,
    22
  ],
  tags: [
    {
      delimiter: '',
      description: '',
      descriptionLines: [],
      lineEnd: '',
      loc: {
        end: {
          column: 21,
          line: 2
        },
        start: {
          column: 6,
          line: 2
        }
      },
      name: '',
      parsedType: null,
      postDelimiter: '',
      postName: '',
      postTag: ' ',
      postType: '',
      range: [
        7,
        22
      ],
      rawType: '',
      initial: '',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  initial: '',
  hasPreterminalDescription: 0,
  type: 'JsdocBlock'
};

const jsdocBlock = {
  commentsIndex: 0,
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  terminal: '*/',
  endLine: 0,
  lastDescriptionLine: 0,
  lineEnd: '',
  loc: {
    end: {
      column: 34,
      line: 2
    },
    start: {
      column: 19,
      line: 2
    }
  },
  parent: null,
  postDelimiter: ' ',
  range: [
    20,
    35
  ],
  tags: [
    {
      delimiter: '',
      description: '',
      descriptionLines: [],
      lineEnd: '',
      loc: {
        end: {
          column: 34,
          line: 2
        },
        start: {
          column: 19,
          line: 2
        }
      },
      name: '',
      parsedType: null,
      postDelimiter: '',
      postName: '',
      postTag: ' ',
      postType: '',
      range: [
        20,
        35
      ],
      rawType: '',
      initial: '',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  initial: '',
  hasPreterminalDescription: 0,
  hasPreterminalTagDescription: 1,
  inlineTags: [],
  type: 'JsdocBlock'
};

const body = {
  kind: 'const',
  declare: false,
  declarations: [
    {
      type: 'VariableDeclarator',
      definite: false,
      range: [
        13,
        52
      ],
      loc: {
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 51
        }
      },
      id: {
        type: 'Identifier',
        jsdoc: null,
        optional: false,
        decorators: [],
        loc: {
          start: {
            line: 2,
            column: 12
          },
          end: {
            line: 2,
            column: 16
          }
        },
        range: [
          13,
          17
        ],
        typeAnnotation: undefined,
        name: 'func'
      },
      jsdoc: null,
      init: {
        type: 'FunctionExpression',
        generator: false,
        async: false,
        expression: false,
        declare: false,
        params: [],
        returnType: undefined,
        typeParameters: undefined,
        loc: {
          start: {
            line: 2,
            column: 35
          },
          end: {
            line: 2,
            column: 51
          }
        },
        range: [
          36,
          52
        ],
        jsdoc,
        id: {
          type: 'Identifier',
          typeAnnotation: undefined,
          decorators: [],
          optional: false,
          loc: {
            start: {
              line: 2,
              column: 44
            },
            end: {
              line: 2,
              column: 45
            }
          },
          range: [
            45,
            46
          ],
          name: 'a',
          jsdoc: null
        },
        body: {
          type: 'BlockStatement',
          loc: {
            start: {
              line: 2,
              column: 49
            },
            end: {
              line: 2,
              column: 51
            }
          },
          range: [
            50,
            52
          ],
          body: [],
          jsdoc: null
        }
      }
    }
  ],
  jsdoc: null,
  loc: {
    end: {
      column: 51,
      line: 2
    },
    start: {
      column: 6,
      line: 2
    }
  },
  range: [
    7,
    52
  ],
  type: 'VariableDeclaration'
};

const jsdocCloseAncestorSomeTagTS = {
  ast: {
    body: [
      body
    ],
    comments: [
      {
        loc: {
          end: {
            column: 34,
            line: 2
          },
          start: {
            column: 19,
            line: 2
          }
        },
        range: [
          20,
          35
        ],
        type: 'Block',
        value: '* @someTag '
      }
    ],
    jsdocBlocks: [
    ],
    loc: {
      end: {
        column: 4,
        line: 3
      },
      start: {
        column: 6,
        line: 2
      }
    },
    parent: null,
    range: [
      7,
      57
    ],
    sourceType: 'module',
    tokens: [
      {
        loc: {
          end: {
            column: 11,
            line: 2
          },
          start: {
            column: 6,
            line: 2
          }
        },
        range: [
          7,
          12
        ],
        type: 'Keyword',
        value: 'const'
      },
      {
        loc: {
          end: {
            column: 16,
            line: 2
          },
          start: {
            column: 12,
            line: 2
          }
        },
        range: [
          13,
          17
        ],
        type: 'Identifier',
        value: 'func'
      },
      {
        loc: {
          end: {
            column: 18,
            line: 2
          },
          start: {
            column: 17,
            line: 2
          }
        },
        range: [
          18,
          19
        ],
        type: 'Punctuator',
        value: '='
      },
      {
        loc: {
          end: {
            column: 43,
            line: 2
          },
          start: {
            column: 35,
            line: 2
          }
        },
        range: [
          36,
          44
        ],
        type: 'Keyword',
        value: 'function'
      },
      {
        loc: {
          end: {
            column: 45,
            line: 2
          },
          start: {
            column: 44,
            line: 2
          }
        },
        range: [
          45,
          46
        ],
        type: 'Identifier',
        value: 'a'
      },
      {
        loc: {
          end: {
            column: 47,
            line: 2
          },
          start: {
            column: 46,
            line: 2
          }
        },
        range: [
          47,
          48
        ],
        type: 'Punctuator',
        value: '('
      },
      {
        type: 'Punctuator',
        value: ')',
        loc: {
          start: {
            line: 2,
            column: 47
          },
          end: {
            line: 2,
            column: 48
          }
        },
        range: [
          48,
          49
        ]
      },
      {
        type: 'Punctuator',
        value: '{',
        loc: {
          start: {
            line: 2,
            column: 49
          },
          end: {
            line: 2,
            column: 50
          }
        },
        range: [
          50,
          51
        ]
      },
      {
        type: 'Punctuator',
        value: '}',
        loc: {
          start: {
            line: 2,
            column: 50
          },
          end: {
            line: 2,
            column: 51
          }
        },
        range: [
          51,
          52
        ]
      }
    ],
    type: 'Program'
  },
  services: {},
  visitorKeys
};

body.declarations[0].id.parent = body.declarations[0];
body.declarations[0].init.parent = body.declarations[0];
body.declarations[0].init.id.parent = body.declarations[0].init;
body.declarations[0].init.body.parent = body.declarations[0].init;
// body.declarations[0].init.jsdoc.parent = body.declarations[0].init;
body.declarations[0].parent = body;
// body.jsdoc.tags[0].parent = body.jsdoc;
// body.jsdoc.parent = body;
body.parent = jsdocCloseAncestorSomeTagTS.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc2.tags[0].parent = jsdoc2;
jsdoc2.parent = jsdocCloseAncestorSomeTagTS.ast;
jsdoc.tags[0].parent = jsdoc;
jsdoc.parent = body.declarations[0].init;

export default jsdocCloseAncestorSomeTagTS;
