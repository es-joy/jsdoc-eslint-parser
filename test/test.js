import {expect} from 'chai';

import {parseForESLint} from '../src/index.js';
import {
  CompareValuesWithDetailedDifferences as
  compareValuesWithDetailedDifferences
} from 'object-deep-compare';

import jsdocSomeTag from './fixtures/jsdocSomeTag.js';
import jsdocSomeTagUnattached from './fixtures/jsdocSomeTagUnattached.js';
import jsdocAncestorSomeTag from './fixtures/jsdocAncestorSomeTag.js';
import jsdocCloseAncestorSomeTag from './fixtures/jsdocCloseAncestorSomeTag.js';
import jsdocCloseAncestorSomeTagNoSpace from
  './fixtures/jsdocCloseAncestorSomeTagNoSpace.js';
import lineComment from './fixtures/lineComment.js';
import multilineComment from './fixtures/multilineComment.js';

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

  it('parses for ESLint (unattached)', function () {
    const parsed = parseForESLint(`
      /**
       * @someTag
       */
    `);

    expect(
      parsed.visitorKeys
    ).to.deep.equal(jsdocSomeTagUnattached.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocSomeTagUnattached.services);

    const circResult = compareValuesWithDetailedDifferences(
      jsdocSomeTagUnattached.ast, parsed.ast,
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult.length).to.equal(0);
    // expect(parsed.scopeManager).to.deep.equal(
    //   jsdocSomeTagUnattached.scopeManager
    // );
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
      mode: 'jsdoc'
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

      const circResult = compareValuesWithDetailedDifferences(
        jsdocCloseAncestorSomeTagNoSpace.ast, parsed.ast,
        '',
        {
          circularReferences: 'ignore'
        }
      );

      expect(circResult.length).to.equal(0);
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
