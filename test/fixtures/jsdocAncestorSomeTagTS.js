import visitorKeys from './visitorKeysTS.js';

const jsdoc = {
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
      column: 21,
      line: 2
    },
    start: {
      column: 6,
      line: 2
    }
  },
  parent: null,
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

const body = {
  kind: 'const',
  declarations: [
    {
      type: 'VariableDeclarator',
      range: [
        35,
        58
      ],
      loc: {
        start: {
          line: 3,
          column: 12
        },
        end: {
          line: 3,
          column: 35
        }
      },
      id: {
        type: 'Identifier',
        jsdoc: null,
        loc: {
          start: {
            line: 3,
            column: 12
          },
          end: {
            line: 3,
            column: 16
          },
          filename: undefined
        },
        range: [
          35,
          39
        ],
        name: 'func'
      },
      jsdoc: null,
      init: {
        type: 'FunctionExpression',
        generator: false,
        async: false,
        expression: false,
        params: [],
        loc: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 35
          }
        },
        range: [
          42,
          58
        ],
        jsdoc: null,
        id: {
          type: 'Identifier',
          loc: {
            start: {
              line: 3,
              column: 28
            },
            end: {
              line: 3,
              column: 29
            },
            filename: undefined
          },
          range: [
            51,
            52
          ],
          name: 'a',
          jsdoc: null
        },
        body: {
          type: 'BlockStatement',
          loc: {
            start: {
              line: 3,
              column: 33
            },
            end: {
              line: 3,
              column: 35
            },
            filename: undefined,
            identifierName: undefined
          },
          range: [
            56,
            58
          ],
          body: [],
          jsdoc: null
        }
      }
    }
  ],
  jsdoc: {
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
        inlineTags: [],
        tag: 'someTag',
        type: 'JsdocTag',
        typeLines: []
      }
    ],
    initial: '      ',
    hasPreterminalDescription: 0,
    hasPreterminalTagDescription: 1,
    inlineTags: [],
    type: 'JsdocBlock'
  },
  loc: {
    end: {
      column: 35,
      line: 3
    },
    filename: undefined,
    identifierName: undefined,
    start: {
      column: 6,
      line: 3
    }
  },
  range: [
    29,
    58
  ],
  type: 'VariableDeclaration'
};

const jsdocSomeTagTS = {
  ast: {
    body: [
      body
    ],
    comments: [
      {
        loc: {
          end: {
            column: 21,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 6,
            line: 2
          }
        },
        range: [
          7,
          22
        ],
        type: 'Block',
        value: '* @someTag '
      }
    ],
    jsdocBlocks: [],
    loc: {
      end: {
        column: 4,
        line: 4
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 6,
        line: 3
      }
    },
    parent: null,
    range: [
      29,
      63
    ],
    sourceType: 'module',
    tokens: [
      {
        loc: {
          end: {
            column: 11,
            line: 3
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 6,
            line: 3
          }
        },
        range: [
          29,
          34
        ],
        type: 'Keyword',
        value: 'const'
      },
      {
        loc: {
          end: {
            column: 16,
            line: 3
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 12,
            line: 3
          }
        },
        range: [
          35,
          39
        ],
        type: 'Identifier',
        value: 'func'
      },
      {
        loc: {
          end: {
            column: 18,
            line: 3
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 17,
            line: 3
          }
        },
        range: [
          40,
          41
        ],
        type: 'Punctuator',
        value: '='
      },
      {
        loc: {
          end: {
            column: 27,
            line: 3
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 19,
            line: 3
          }
        },
        range: [
          42,
          50
        ],
        type: 'Keyword',
        value: 'function'
      },
      {
        loc: {
          end: {
            column: 29,
            line: 3
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 28,
            line: 3
          }
        },
        range: [
          51,
          52
        ],
        type: 'Identifier',
        value: 'a'
      },
      {
        loc: {
          end: {
            column: 31,
            line: 3
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 30,
            line: 3
          }
        },
        range: [
          53,
          54
        ],
        type: 'Punctuator',
        value: '('
      },
      {
        type: 'Punctuator',
        value: ')',
        loc: {
          start: {
            line: 3,
            column: 31
          },
          end: {
            line: 3,
            column: 32
          },
          filename: undefined,
          identifierName: undefined
        },
        range: [
          54,
          55
        ]
      },
      {
        type: 'Punctuator',
        value: '{',
        loc: {
          start: {
            line: 3,
            column: 33
          },
          end: {
            line: 3,
            column: 34
          },
          filename: undefined,
          identifierName: undefined
        },
        range: [
          56,
          57
        ]
      },
      {
        type: 'Punctuator',
        value: '}',
        loc: {
          start: {
            line: 3,
            column: 34
          },
          end: {
            line: 3,
            column: 35
          },
          filename: undefined,
          identifierName: undefined
        },
        range: [
          57,
          58
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
body.jsdoc.tags[0].parent = body.jsdoc;
body.jsdoc.parent = body;
body.parent = jsdocSomeTagTS.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc.tags[0].parent = jsdoc;
jsdoc.parent = body.declarations[0].init;

export default jsdocSomeTagTS;
