import {parseForESLint} from '../src/index.js';
import circularDeepIdentity from './utils/circularDeepIdentity.js';

import jsdocSomeTag from './fixtures/jsdocSomeTag.js';
import jsdocAncestorSomeTag from './fixtures/jsdocAncestorSomeTag.js';
import jsdocCloseAncestorSomeTag from './fixtures/jsdocCloseAncestorSomeTag.js';
import jsdocCloseAncestorSomeTagNoSpace from
  './fixtures/jsdocCloseAncestorSomeTagNoSpace.js';
import lineComment from './fixtures/lineComment.js';
import multilineComment from './fixtures/multilineComment.js';

/**
 * @param {unknown} obj1
 * @param {unknown} obj2
 * @returns {boolean}
 */
function compare (obj1, obj2) {
  const track1 = {};
  const track2 = {};
  const ret = circularDeepIdentity(
    obj1, obj2, (o) => {
      return 'line' in o && 'column' in o;
    }, track1, track2
  );

  if (!ret) {
    // eslint-disable-next-line no-console -- Debugging
    console.log('tracks', track1, track2);
  }

  return ret;
}

describe('`parseForESLint`', function () {
  it('parses for ESLint', function () {
    const parsed = parseForESLint(`
      /**
       * @someTag
       */
      function a () {}
    `);

    expect(parsed.visitorKeys).to.deep.equal(jsdocSomeTag.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocSomeTag.services);

    const circResult = compare(parsed.ast, jsdocSomeTag.ast);

    expect(circResult).to.equal(true);
    // expect(parsed.scopeManager).to.deep.equal(jsdocSomeTag.scopeManager);
  });

  it('parses for ESLint (ancestor having comment)', function () {
    const parsed = parseForESLint(`
      /** @someTag */
      const func = function a () {}
    `, {
      mode: 'jsdoc'
    });

    expect(parsed.visitorKeys).to.deep.equal(jsdocAncestorSomeTag.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocAncestorSomeTag.services);

    const circResult = compare(parsed.ast, jsdocAncestorSomeTag.ast);

    expect(circResult).to.equal(true);
  });

  it('parses for ESLint (close ancestor having comment)', function () {
    const parsed = parseForESLint(`
      const func = /** @someTag */ function a () {}
    `, {
      mode: 'jsdoc'
    });

    expect(parsed.visitorKeys).to.deep.equal(
      jsdocCloseAncestorSomeTag.visitorKeys
    );
    expect(parsed.services).to.deep.equal(jsdocCloseAncestorSomeTag.services);

    const circResult = compare(parsed.ast, jsdocCloseAncestorSomeTag.ast);

    expect(circResult).to.equal(true);
  });

  it(
    'parses for ESLint (close ancestor having comment and no space)',
    function () {
      const parsed = parseForESLint(`
/** @someTag */ function a () {}
      `, {
        mode: 'jsdoc'
      });

      expect(parsed.visitorKeys).to.deep.equal(
        jsdocCloseAncestorSomeTagNoSpace.visitorKeys
      );
      expect(parsed.services).to.deep.equal(
        jsdocCloseAncestorSomeTagNoSpace.services
      );

      const circResult = compare(
        parsed.ast, jsdocCloseAncestorSomeTagNoSpace.ast
      );

      expect(circResult).to.equal(true);
    }
  );

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
