import visitorKeys from './visitorKeys.js';

const body = {
  async: false,
  body: {
    body: [],
    end: 61,
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
    start: 59,
    type: 'BlockStatement'
  },
  end: 61,
  expression: false,
  generator: false,
  id: {
    end: 55,
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
    start: 54,
    type: 'Identifier'
  },
  jsdoc: {
    delimiter: '/**',
    delimiterLineBreak: '\n',
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
    preterminalLineBreak: '\n',
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
        inlineTags: [],
        tag: 'someTag',
        type: 'JsdocTag',
        typeLines: []
      }
    ],
    initial: '      ',
    hasPreterminalDescription: 0,
    inlineTags: [],
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
  start: 45,
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
  hasPreterminalDescription: 0,
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
  hasPreterminalDescription: 0,
  type: 'JsdocBlock'
};

const jsdocSomeTag = {
  ast: {
    body: [
      body
    ],
    comments: [
      {
        end: 38,
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
        start: 7,
        type: 'Block',
        value: '*\n       * @someTag\n       '
      }
    ],
    end: 66,
    jsdocBlocks: [],
    loc: {
      end: {
        column: 4,
        line: 6
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 0,
        line: 5
      }
    },
    parent: null,
    range: [
      45,
      66
    ],
    sourceType: 'module',
    start: 45,
    tokens: [
      {
        end: 53,
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
        start: 45,
        type: 'Keyword',
        value: 'function'
      },
      {
        end: 55,
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
        start: 54,
        type: 'Identifier',
        value: 'a'
      },
      {
        end: 57,
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
        start: 56,
        type: 'Punctuator',
        value: '('
      },
      {
        end: 58,
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
        start: 57,
        type: 'Punctuator',
        value: ')'
      },
      {
        end: 60,
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
        start: 59,
        type: 'Punctuator',
        value: '{'
      },
      {
        end: 61,
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
        start: 60,
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
body.parent = jsdocSomeTag.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc.tags[0].parent = jsdoc;
jsdoc.parent = jsdocSomeTag.ast;

export default jsdocSomeTag;
