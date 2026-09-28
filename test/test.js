import {expect} from 'chai';
import {
  CompareValuesWithDetailedDifferences as
  compareValuesWithDetailedDifferences
} from 'object-deep-compare';

import {parseForESLint} from '../src/index.js';

import jsdocSomeTag from './fixtures/jsdocSomeTag.js';
import jsdocSomeTagUnattached from './fixtures/jsdocSomeTagUnattached.js';
import jsdocAncestorSomeTag from './fixtures/jsdocAncestorSomeTag.js';
import jsdocCloseAncestorSomeTag from './fixtures/jsdocCloseAncestorSomeTag.js';
import jsdocCloseAncestorSomeTagNoSpace from
  './fixtures/jsdocCloseAncestorSomeTagNoSpace.js';
import lineComment from './fixtures/lineComment.js';
import multilineComment from './fixtures/multilineComment.js';

const normalizeForCompare = (value) => {
  return JSON.parse(JSON.stringify(value, (key, val) => {
    return val === null ||
      ['parent', 'start', 'end', 'range', 'loc'].includes(key)
      ? undefined
      : val;
  }));
};

const assertVisitorKeys = (visitorKeys) => {
  expect(visitorKeys.Program).to.include('jsdocBlocks');
  expect(visitorKeys.FunctionDeclaration).to.include('jsdoc');
  expect(visitorKeys.Identifier).to.include('jsdoc');
};

describe('`parseForESLint`', function () {
  it('parses for ESLint', function () {
    const parsed = parseForESLint(`
      /**
       * @someTag
       */
      function a () {}
    `);

    assertVisitorKeys(parsed.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocSomeTag.services);

    const circResult = compareValuesWithDetailedDifferences(
      normalizeForCompare(jsdocSomeTag.ast),
      normalizeForCompare(parsed.ast),
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult).to.have.lengthOf(0);
    // expect(parsed.scopeManager).to.deep.equal(jsdocSomeTag.scopeManager);
  });

  it('parses for ESLint (unattached)', function () {
    const parsed = parseForESLint(`
      /**
       * @someTag
       */
    `);

    assertVisitorKeys(parsed.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocSomeTagUnattached.services);

    const circResult = compareValuesWithDetailedDifferences(
      normalizeForCompare(jsdocSomeTagUnattached.ast),
      normalizeForCompare(parsed.ast),
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult).to.have.lengthOf(0);
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

    assertVisitorKeys(parsed.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocAncestorSomeTag.services);

    const circResult = compareValuesWithDetailedDifferences(
      normalizeForCompare(jsdocAncestorSomeTag.ast),
      normalizeForCompare(parsed.ast),
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult).to.have.lengthOf(0);
  });

  it('parses for ESLint (close ancestor having comment)', function () {
    const parsed = parseForESLint(`
      const func = /** @someTag */ function a () {}
    `, {
      mode: 'jsdoc'
    });

    assertVisitorKeys(parsed.visitorKeys);
    expect(parsed.services).to.deep.equal(jsdocCloseAncestorSomeTag.services);

    const circResult = compareValuesWithDetailedDifferences(
      normalizeForCompare(jsdocCloseAncestorSomeTag.ast),
      normalizeForCompare(parsed.ast),
      '',
      {
        circularReferences: 'ignore'
      }
    );

    expect(circResult).to.have.lengthOf(0);
  });

  it(
    'parses for ESLint (close ancestor having comment and no space)',
    function () {
      const parsed = parseForESLint(`
/** @someTag */ function a () {}
      `, {
        mode: 'jsdoc'
      });

      assertVisitorKeys(parsed.visitorKeys);
      expect(parsed.services).to.deep.equal(
        jsdocCloseAncestorSomeTagNoSpace.services
      );

      const circResult = compareValuesWithDetailedDifferences(
        normalizeForCompare(jsdocCloseAncestorSomeTagNoSpace.ast),
        normalizeForCompare(parsed.ast),
        '',
        {
          circularReferences: 'ignore'
        }
      );

      expect(circResult).to.have.lengthOf(0);
    }
  );

  it('Avoids line comments', function () {
    const parsed = parseForESLint(`
      // Some tag
    `, {
      mode: 'jsdoc'
    });

    expect(
      normalizeForCompare(parsed.ast)
    ).to.deep.equal(normalizeForCompare(lineComment));
  });

  it('Avoids non-JSDoc multiline comments', function () {
    const parsed = parseForESLint(`
      /* */
    `, {
      mode: 'jsdoc'
    });

    expect(
      normalizeForCompare(parsed.ast)
    ).to.deep.equal(normalizeForCompare(multilineComment));
  });
});
