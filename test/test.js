import {parseForESLint} from '../src/index.js';

import jsdocSomeTag from './fixtures/jsdocSomeTag.js';
import lineComment from './fixtures/lineComment.js';
import multilineComment from './fixtures/multilineComment.js';

describe('`parseForESLint`', function () {
  it('parses for ESLint', function () {
    const parsed = parseForESLint(`
      /**
       * @someTag
       */
      function a () {}
    `, {
      mode: 'jsdoc'
    });

    expect(parsed.visitorKeys).to.deep.equal(jsdocSomeTag.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocSomeTag.services);

    // Chai appears to be choking on circular parents
    Object.keys(parsed.ast).forEach((prop) => {
      const val = parsed.ast[prop];
      const expectedVal = jsdocSomeTag.ast[prop];
      if (prop === 'body') {
        Object.keys(val[0]).forEach((p) => {
          Object.keys(val[0][p]).forEach((pp) => {
            if (p !== 'parent' && pp !== 'parent') {
              if (p === 'jsdoc' && pp === 'tags') {
                Object.keys(val[0][p][pp][0]).forEach((ppp) => {
                  if (ppp !== 'parent') {
                    expect(
                      val[0][p][pp][0][ppp]
                    ).to.deep.equal(expectedVal[0][p][pp][0][ppp]);
                  }
                });
                return;
              }
              expect(val[0][p][pp]).to.deep.equal(expectedVal[0][p][pp]);
            }
          });
        });
        return;
      }
      if (prop === 'jsdoc') {
        Object.keys(val).forEach((p) => {
          if (p === 'tags') {
            Object.keys(val[p][0]).forEach((pp) => {
              if (pp !== 'parent') {
                if (pp === 'parsedType' && val[p][0][pp] === null) {
                  return;
                }

                expect(val[p][0][pp]).to.deep.equal(expectedVal[p][0][pp]);
              }
            });
            return;
          }
          if (p !== 'parent') {
            expect(val[p]).to.deep.equal(expectedVal[p]);
          }
        });
        return;
      }

      expect(val).to.deep.equal(expectedVal);
    });
    // expect(parsed.scopeManager).to.deep.equal(jsdocSomeTag.scopeManager);
  });

  it('Avoids line comments', function () {
    const parsed = parseForESLint(`
      // Some tag
    `, {
      mode: 'jsdoc'
    });

    Object.keys(parsed.ast).forEach((prop) => {
      expect(parsed.ast[prop]).to.deep.equal(lineComment[prop]);
    });
  });

  it('Avoids non-JSDoc multiline comments', function () {
    const parsed = parseForESLint(`
      /* */
    `, {
      mode: 'jsdoc'
    });

    Object.keys(parsed.ast).forEach((prop) => {
      expect(parsed.ast[prop]).to.deep.equal(multilineComment[prop]);
    });
  });
});
