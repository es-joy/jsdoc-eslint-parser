import visitorKeys from './visitorKeys.js';

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

const jsdocSomeTag = {
  ast: {
    body: [
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
    end: 43,
    jsdocBlocks: [
      jsdocBlock
    ],
    loc: {
      end: {
        column: 4,
        line: 5
      },
      filename: undefined,
      identifierName: undefined,
      start: {
        column: 0,
        line: 1
      }
    },
    parent: null,
    range: [
      0,
      43
    ],
    sourceType: 'module',
    start: 0,
    tokens: [
    ],
    type: 'Program'
  },
  services: {},
  visitorKeys
};

jsdocBlock.tags[0].parent = jsdocBlock;

export default jsdocSomeTag;
