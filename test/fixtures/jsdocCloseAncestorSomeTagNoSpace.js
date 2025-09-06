import visitorKeys from './visitorKeys.js';

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
  type: 'JsdocBlock'
};

const body = {
  id: {
    type: 'Identifier',
    start: 26,
    end: 27,
    jsdoc: null,
    loc: {
      start: {
        line: 2,
        column: 25
      },
      end: {
        line: 2,
        column: 26
      },
      filename: undefined
    },
    range: [
      26,
      27
    ],
    name: 'a'
  },
  generator: false,
  async: false,
  expression: false,
  params: [],
  body: {
    body: [],
    end: 33,
    jsdoc: null,
    loc: {
      end: {
        column: 32,
        line: 2
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 30,
        line: 2
      }
    },
    range: [
      31,
      33
    ],
    start: 31,
    type: 'BlockStatement'
  },
  end: 33,
  jsdoc: {
    delimiter: '/**',
    delimiterLineBreak: '',
    description: '',
    descriptionLines: [],
    initial: '',
    terminal: '*/',
    endLine: 0,
    postDelimiter: ' ',
    preterminalLineBreak: '',
    lineEnd: '',
    hasPreterminalDescription: 0,
    hasPreterminalTagDescription: 1,
    inlineTags: [],
    type: 'JsdocBlock',
    lastDescriptionLine: 0,
    tags: [
      {
        tag: 'someTag',
        inlineTags: [],
        postTag: ' ',
        name: '',
        postName: '',
        type: 'JsdocTag',
        postType: '',
        description: '',
        lineEnd: '',
        initial: '',
        postDelimiter: '',
        delimiter: '',
        descriptionLines: [],
        rawType: '',
        typeLines: [],
        parsedType: null,
        loc: {
          start: {
            line: 2,
            column: 0
          },
          end: {
            line: 2,
            column: 15
          }
        },
        range: [
          1,
          16
        ]
      }
    ],
    loc: {start: {
      line: 2,
      column: 0
    }, end: {
      line: 2,
      column: 15
    }},
    range: [1, 16]
  },
  loc: {
    end: {
      column: 32,
      line: 2
    },
    filename: undefined,
    identifierName: undefined,
    start: {
      column: 16,
      line: 2
    }
  },
  range: [
    17,
    33
  ],
  start: 17,
  type: 'FunctionDeclaration'
};

const jsdocCloseAncestorSomeTag = {
  ast: {
    body: [
      body
    ],
    comments: [
      {
        end: 16,
        loc: {
          end: {
            column: 15,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 0,
            line: 2
          }
        },
        range: [
          1,
          16
        ],
        start: 1,
        type: 'Block',
        value: '* @someTag '
      }
    ],
    end: 40,
    jsdocBlocks: [],
    loc: {
      end: {
        column: 6,
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
      17,
      40
    ],
    sourceType: 'module',
    start: 17,
    tokens: [
      {
        end: 25,
        loc: {
          end: {
            column: 24,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 16,
            line: 2
          }
        },
        range: [
          17,
          25
        ],
        start: 17,
        type: 'Keyword',
        value: 'function'
      },
      {
        end: 27,
        loc: {
          end: {
            column: 26,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 25,
            line: 2
          }
        },
        range: [
          26,
          27
        ],
        start: 26,
        type: 'Identifier',
        value: 'a'
      },
      {
        end: 29,
        loc: {
          end: {
            column: 28,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 27,
            line: 2
          }
        },
        range: [
          28,
          29
        ],
        start: 28,
        type: 'Punctuator',
        value: '('
      },
      {
        end: 30,
        loc: {
          end: {
            column: 29,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 28,
            line: 2
          }
        },
        range: [
          29,
          30
        ],
        start: 29,
        type: 'Punctuator',
        value: ')'
      },
      {
        end: 32,
        loc: {
          end: {
            column: 31,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 30,
            line: 2
          }
        },
        range: [
          31,
          32
        ],
        start: 31,
        type: 'Punctuator',
        value: '{'
      },
      {
        end: 33,
        loc: {
          end: {
            column: 32,
            line: 2
          },
          filename: undefined,
          identifierName: undefined,
          start: {
            column: 31,
            line: 2
          }
        },
        range: [
          32,
          33
        ],
        start: 32,
        type: 'Punctuator',
        value: '}'
      }
    ],
    type: 'Program'
  },
  services: {},
  visitorKeys
};

body.id.parent = body;
// body.declarations[0].init.parent = body.declarations[0];
// body.declarations[0].init.id.parent = body.declarations[0].init;
// body.declarations[0].init.body.parent = body.declarations[0].init;
// body.declarations[0].init.jsdoc.parent = body.declarations[0].init;
// body.declarations[0].parent = body;
body.jsdoc.tags[0].parent = body.jsdoc;
body.jsdoc.parent = body;
body.body.parent = body;
body.parent = jsdocCloseAncestorSomeTag.ast;

jsdocBlock.tags[0].parent = jsdocBlock;
jsdoc2.tags[0].parent = jsdoc2;
jsdoc2.parent = jsdocCloseAncestorSomeTag.ast;
jsdoc.tags[0].parent = jsdoc;
// jsdoc.parent = body.declarations[0].init;

export default jsdocCloseAncestorSomeTag;
