import visitorKeys from './visitorKeys.js';

const body = {
  declarations: [
    {
      type: 'VariableDeclarator',
      start: 13,
      end: 52,
      jsdoc: null,
      loc: {
        filename: undefined,
        identifierName: undefined,
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 51
        }
      },
      range: [
        13,
        52
      ],
      id: {
        type: 'Identifier',
        start: 13,
        end: 17,
        jsdoc: null,
        loc: {
          start: {
            line: 2,
            column: 12
          },
          filename: undefined,
          end: {
            line: 2,
            column: 16
          }
        },
        range: [
          13,
          17
        ],
        name: 'func'
      },
      init: {
        type: 'FunctionExpression',
        start: 36,
        end: 52,
        jsdoc: null,
        loc: {
          start: {
            line: 2,
            column: 35
          },
          filename: undefined,
          identifierName: undefined,
          end: {
            line: 2,
            column: 51
          }
        },
        range: [
          36,
          52
        ],
        id: {
          type: 'Identifier',
          start: 45,
          end: 46,
          jsdoc: null,
          loc: {
            filename: undefined,
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
          name: 'a'
        },
        generator: false,
        async: false,
        expression: false,
        params: [],
        body: {
          type: 'BlockStatement',
          start: 50,
          end: 52,
          jsdoc: null,
          loc: {
            filename: undefined,
            identifierName: undefined,
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
          body: []
        }
      }
    }
  ],
  end: 52,
  jsdoc: null,
  kind: 'const',
  loc: {
    end: {
      column: 51,
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
    52
  ],
  start: 7,
  type: 'VariableDeclaration'
};

const jsdoc = {
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  end: '*/',
  endLine: 2,
  lastDescriptionLine: 1,
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
  postDelimiter: '',
  range: [
    20,
    35
  ],
  tags: [
    {
      delimiter: '*',
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
      postDelimiter: ' ',
      postName: '',
      postTag: '',
      postType: '',
      range: [
        20,
        35
      ],
      rawType: '',
      start: '       ',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  type: 'JsdocBlock'
};

const jsdocBlock = {
  commentsIndex: 0,
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  end: '*/',
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
      start: '',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  type: 'JsdocBlock'
};

const jsdocSomeTag = {
  ast: {
    body: [
      body
    ],
    comments: [
      {
        end: 35,
        loc: {
          end: {
            column: 34,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 19,
            line: 2
          }
        },
        range: [
          20,
          35
        ],
        start: 20,
        type: 'Block',
        value: '* @someTag '
      }
    ],
    end: 57,
    jsdoc: null,
    jsdocBlocks: [
      jsdocBlock
    ],
    loc: {
      end: {
        column: 4,
        line: 3
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 0,
        line: 2
      }
    },
    parent: null,
    range: [
      7,
      57
    ],
    sourceType: 'module',
    start: 7,
    tokens: [
      {
        end: 12,
        loc: {
          end: {
            column: 11,
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
          12
        ],
        start: 7,
        type: 'Keyword',
        value: 'const'
      },
      {
        end: 17,
        loc: {
          end: {
            column: 16,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 12,
            line: 2
          }
        },
        range: [
          13,
          17
        ],
        start: 13,
        type: 'Identifier',
        value: 'func'
      },
      {
        end: 19,
        loc: {
          end: {
            column: 18,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 17,
            line: 2
          }
        },
        range: [
          18,
          19
        ],
        start: 18,
        type: 'Punctuator',

        value: '='
      },
      {
        end: 44,
        loc: {
          end: {
            column: 43,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 35,
            line: 2
          }
        },
        range: [
          36,
          44
        ],
        start: 36,
        type: 'Keyword',
        value: 'function'
      },
      {
        end: 46,
        loc: {
          end: {
            column: 45,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 44,
            line: 2
          }
        },
        range: [
          45,
          46
        ],
        start: 45,
        type: 'Identifier',
        value: 'a'
      },
      {
        end: 48,
        loc: {
          end: {
            column: 47,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 46,
            line: 2
          }
        },
        range: [
          47,
          48
        ],
        start: 47,
        type: 'Punctuator',
        value: '('
      },
      {
        end: 49,
        loc: {
          end: {
            column: 48,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 47,
            line: 2
          }
        },
        range: [
          48,
          49
        ],
        start: 48,
        type: 'Punctuator',
        value: ')'
      },
      {
        end: 51,
        loc: {
          end: {
            column: 50,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 49,
            line: 2
          }
        },
        range: [
          50,
          51
        ],
        start: 50,
        type: 'Punctuator',
        value: '{'
      },
      {
        end: 52,
        loc: {
          end: {
            column: 51,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 50,
            line: 2
          }
        },
        range: [
          51,
          52
        ],
        start: 51,
        type: 'Punctuator',
        value: '}'
      }
    ],
    type: 'Program'
  },
  services: {},
  visitorKeys
};

// body.jsdoc.tags[0].parent = body.jsdoc;
// body.jsdoc.parent = body;
body.declarations[0].parent = body;
body.declarations[0].id.parent = body.declarations[0];
body.declarations[0].init.parent = body.declarations[0];
body.declarations[0].init.id.parent = body.declarations[0].init;
body.declarations[0].init.body.parent = body.declarations[0].init;
// body.body.parent = body;
// body.id.parent = body;
body.parent = jsdocSomeTag.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc.tags[0].parent = jsdoc;
jsdoc.parent = jsdocSomeTag.ast;

export default jsdocSomeTag;
