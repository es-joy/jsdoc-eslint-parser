import {parseForESLint} from '../typescript.js';
import circularDeepIdentity from './utils/circularDeepIdentity.js';

import jsdocSomeTag from './fixtures/jsdocSomeTagTS.js';
import jsdocAncestorSomeTag from './fixtures/jsdocAncestorSomeTagTS.js';
import jsdocCloseAncestorSomeTag from
  './fixtures/jsdocCloseAncestorSomeTagTS.js';
import lineComment from './fixtures/lineCommentTS.js';
import multilineComment from './fixtures/multilineCommentTS.js';

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

describe('TypeScript `parseForESLint`', function () {
  it('parses for ESLint', function () {
    const parsed = parseForESLint(`
      /**
       * @someTag
       */
      function a () {}
    `, {
      mode: 'typescript'
    });

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
      mode: 'typescript'
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
      mode: 'typescript'
    });

    expect(parsed.visitorKeys).to.deep.equal(
      jsdocCloseAncestorSomeTag.visitorKeys
    );
    expect(parsed.services).to.deep.equal(jsdocCloseAncestorSomeTag.services);

    const circResult = compare(parsed.ast, jsdocCloseAncestorSomeTag.ast);

    expect(circResult).to.equal(true);
  });

  it('Avoids line comments', function () {
    const parsed = parseForESLint(`
      // Some tag
    `, {
      mode: 'typescript'
    });

    Object.keys(parsed.ast).forEach((prop) => {
      expect(parsed.ast[prop]).to.deep.equal(lineComment[prop]);
    });
  });

  it('Avoids non-JSDoc multiline comments', function () {
    const parsed = parseForESLint(`
      /* */
    `, {
      mode: 'typescript'
    });

    Object.keys(parsed.ast).forEach((prop) => {
      expect(parsed.ast[prop]).to.deep.equal(multilineComment[prop]);
    });
  });
});
