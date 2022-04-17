import visitorKeys from './visitorKeysTS.js';

const body = {
  async: false,
  body: {
    body: [],
    jsdoc: null,
    loc: {
      end: {
        column: 22,
        line: 5
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 20,
        line: 5
      }
    },
    range: [
      59,
      61
    ],
    type: 'BlockStatement'
  },
  expression: false,
  generator: false,
  id: {
    jsdoc: null,
    loc: {
      end: {
        column: 16,
        line: 5
      },
      filename: undefined,
      start: {
        column: 15,
        line: 5
      }
    },
    name: 'a',
    range: [
      54,
      55
    ],
    type: 'Identifier'
  },
  jsdoc: {
    delimiter: '/**',
    description: '',
    descriptionLines: [],
    terminal: '*/',
    endLine: 2,
    lastDescriptionLine: 1,
    lineEnd: '',
    loc: {
      end: {
        column: 9,
        line: 4
      },
      start: {
        column: 6,
        line: 2
      }
    },
    postDelimiter: '',
    range: [
      7,
      38
    ],
    tags: [
      {
        delimiter: '*',
        description: '',
        descriptionLines: [],
        lineEnd: '',
        loc: {
          end: {
            column: 9,
            line: 4
          },
          start: {
            column: 6,
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
          7,
          38
        ],
        rawType: '',
        initial: '       ',
        tag: 'someTag',
        type: 'JsdocTag',
        typeLines: []
      }
    ],
    initial: '',
    type: 'JsdocBlock'
  },
  loc: {
    end: {
      column: 22,
      line: 5
    },
    filename: undefined,
    identifierName: undefined,
    start: {
      column: 6,
      line: 5
    }
  },
  params: [],
  range: [
    45,
    61
  ],
  type: 'FunctionDeclaration'
};

const jsdoc = {
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  terminal: '*/',
  endLine: 2,
  lastDescriptionLine: 1,
  lineEnd: '',
  loc: {
    end: {
      column: 9,
      line: 4
    },
    start: {
      column: 6,
      line: 2
    }
  },
  postDelimiter: '',
  range: [
    7,
    38
  ],
  tags: [
    {
      delimiter: '*',
      description: '',
      descriptionLines: [],
      lineEnd: '',
      loc: {
        end: {
          column: 9,
          line: 4
        },
        start: {
          column: 6,
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
        7,
        38
      ],
      rawType: '',
      initial: '       ',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  initial: '',
  type: 'JsdocBlock'
};

const jsdocBlock = {
  commentsIndex: 0,
  delimiter: '/**',
  description: '',
  descriptionLines: [],
  terminal: '*/',
  endLine: 2,
  lastDescriptionLine: 1,
  lineEnd: '',
  loc: {
    end: {
      column: 9,
      line: 4
    },
    start: {
      column: 6,
      line: 2
    }
  },
  parent: null,
  postDelimiter: '',
  range: [
    7,
    38
  ],
  tags: [
    {
      delimiter: '*',
      description: '',
      descriptionLines: [],
      lineEnd: '',
      loc: {
        end: {
          column: 9,
          line: 4
        },
        start: {
          column: 6,
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
        7,
        38
      ],
      rawType: '',
      initial: '       ',
      tag: 'someTag',
      type: 'JsdocTag',
      typeLines: []
    }
  ],
  initial: '',
  type: 'JsdocBlock'
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
            column: 9,
            line: 4
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
          38
        ],
        type: 'Block',
        value: '*\n       * @someTag\n       '
      }
    ],
    jsdoc: null,
    jsdocBlocks: [
      jsdocBlock
    ],
    loc: {
      end: {
        column: 4,
        line: 6
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 6,
        line: 5
      }
    },
    parent: null,
    range: [
      45,
      66
    ],
    sourceType: 'module',
    tokens: [
      {
        loc: {
          end: {
            column: 14,
            line: 5
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 6,
            line: 5
          }
        },
        range: [
          45,
          53
        ],
        type: 'Keyword',
        value: 'function'
      },
      {
        loc: {
          end: {
            column: 16,
            line: 5
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 15,
            line: 5
          }
        },
        range: [
          54,
          55
        ],
        type: 'Identifier',
        value: 'a'
      },
      {
        loc: {
          end: {
            column: 18,
            line: 5
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 17,
            line: 5
          }
        },
        range: [
          56,
          57
        ],
        type: 'Punctuator',
        value: '('
      },
      {
        loc: {
          end: {
            column: 19,
            line: 5
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 18,
            line: 5
          }
        },
        range: [
          57,
          58
        ],
        type: 'Punctuator',
        value: ')'
      },
      {
        loc: {
          end: {
            column: 21,
            line: 5
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 20,
            line: 5
          }
        },
        range: [
          59,
          60
        ],
        type: 'Punctuator',
        value: '{'
      },
      {
        loc: {
          end: {
            column: 22,
            line: 5
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 21,
            line: 5
          }
        },
        range: [
          60,
          61
        ],
        type: 'Punctuator',
        value: '}'
      }
    ],
    type: 'Program'
  },
  services: {},
  visitorKeys
};

body.jsdoc.tags[0].parent = body.jsdoc;
body.jsdoc.parent = body;
body.body.parent = body;
body.id.parent = body;
body.parent = jsdocSomeTagTS.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc.tags[0].parent = jsdoc;
jsdoc.parent = jsdocSomeTagTS.ast;

export default jsdocSomeTagTS;
