import visitorKeys from './visitorKeys.js';

const jsdoc = {
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  end: '*/',
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
      start: '',
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
      start: '',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  type: 'JsdocBlock'
};

const body = {
  kind: 'const',
  declarations: [
    {
      type: 'VariableDeclarator',
      start: 35,
      end: 58,
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
        start: 35,
        end: 39,
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
        start: 42,
        end: 58,
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
          start: 51,
          end: 52,
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
          start: 56,
          end: 58,
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
  end: 58,
  jsdoc: {
    delimiter: '/**',
    description: '',
    descriptionLines: [],
    end: '*/',
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
        start: '',
        tag: 'someTag',
        type: 'JsdocTag',
        typeLines: []
      }
    ],
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
  start: 29,
  type: 'VariableDeclaration'
};

const jsdocSomeTag = {
  ast: {
    body: [
      body
    ],
    comments: [
      {
        end: 22,
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
        start: 7,
        type: 'Block',
        value: '* @someTag '
      }
    ],
    end: 63,
    jsdoc: null,
    jsdocBlocks: [
      jsdocBlock
    ],
    loc: {
      end: {
        column: 4,
        line: 4
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 0,
        line: 3
      }
    },
    parent: null,
    range: [
      29,
      63
    ],
    sourceType: 'module',
    start: 29,
    tokens: [
      {
        end: 34,
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
        start: 29,
        type: 'Keyword',
        value: 'const'
      },
      {
        end: 39,
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
        start: 35,
        type: 'Identifier',
        value: 'func'
      },
      {
        end: 41,
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
        start: 40,
        type: 'Punctuator',
        value: '='
      },
      {
        end: 50,
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
        start: 42,
        type: 'Keyword',
        value: 'function'
      },
      {
        end: 52,
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
        start: 51,
        type: 'Identifier',
        value: 'a'
      },
      {
        end: 54,
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
        start: 53,
        type: 'Punctuator',
        value: '('
      },
      {
        type: 'Punctuator',
        value: ')',
        start: 54,
        end: 55,
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
        start: 56,
        end: 57,
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
        start: 57,
        end: 58,
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
body.parent = jsdocSomeTag.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc.tags[0].parent = jsdoc;
jsdoc.parent = body.declarations[0].init;

export default jsdocSomeTag;
