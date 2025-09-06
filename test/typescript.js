import {expect} from 'chai';

import {parseForESLint} from '../typescript.js';
import {
  CompareValuesWithDetailedDifferences as
  compareValuesWithDetailedDifferences
} from 'object-deep-compare';

import jsdocSomeTag from './fixtures/jsdocSomeTagTS.js';
import jsdocAncestorSomeTag from './fixtures/jsdocAncestorSomeTagTS.js';
import jsdocCloseAncestorSomeTag from
  './fixtures/jsdocCloseAncestorSomeTagTS.js';
import lineComment from './fixtures/lineCommentTS.js';
import multilineComment from './fixtures/multilineCommentTS.js';

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

    const circResult = compareValuesWithDetailedDifferences(
      jsdocSomeTag.ast, parsed.ast,
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult.length).to.equal(0);
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

    const circResult = compareValuesWithDetailedDifferences(
      jsdocAncestorSomeTag.ast, parsed.ast,
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult.length).to.equal(0);
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

    const circResult = compareValuesWithDetailedDifferences(
      jsdocCloseAncestorSomeTag.ast, parsed.ast,
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult.length).to.equal(0);
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
