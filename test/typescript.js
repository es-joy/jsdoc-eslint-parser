import {expect} from 'chai';
import {
  CompareValuesWithDetailedDifferences as
  compareValuesWithDetailedDifferences
} from 'object-deep-compare';

import {parseForESLint} from '../typescript.js';

import jsdocSomeTag from './fixtures/jsdocSomeTagTS.js';
import jsdocAncestorSomeTag from './fixtures/jsdocAncestorSomeTagTS.js';
import jsdocCloseAncestorSomeTag from
  './fixtures/jsdocCloseAncestorSomeTagTS.js';
import lineComment from './fixtures/lineCommentTS.js';
import multilineComment from './fixtures/multilineCommentTS.js';

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

  it('parses for ESLint (ancestor having comment)', function () {
    const parsed = parseForESLint(`
      /** @someTag */
      const func = function a () {}
    `, {
      mode: 'typescript'
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
      mode: 'typescript'
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

  it('Avoids line comments', function () {
    const parsed = parseForESLint(`
      // Some tag
    `, {
      mode: 'typescript'
    });

    expect(
      normalizeForCompare(parsed.ast)
    ).to.deep.equal(normalizeForCompare(lineComment));
  });

  it('Avoids non-JSDoc multiline comments', function () {
    const parsed = parseForESLint(`
      /* */
    `, {
      mode: 'typescript'
    });

    expect(
      normalizeForCompare(parsed.ast)
    ).to.deep.equal(normalizeForCompare(multilineComment));
  });
});
