/* eslint-disable mocha/no-identical-title -- Ok */
import {expect} from 'chai';

import circularDeepIdentity from './utils/circularDeepIdentity.js';

describe('`circularDeepIdentity`', function () {
  describe('Primitives', function () {
    it('returns true for identical primitives', function () {
      const obj1 = 15;
      const obj2 = 15;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });

    it('returns false for distinct primitives', function () {
      const obj1 = 10;
      const obj2 = 15;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });

    it('returns false for object vs. primitive', function () {
      const obj1 = {};
      const obj2 = 15;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);

      const obj3 = 15;
      const obj4 = {};
      expect(circularDeepIdentity(obj3, obj4)).to.equal(false);
    });
  });

  describe('Identical objects', function () {
    it('returns true for identical objects', function () {
      const obj1 = {};
      const obj2 = obj1;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });
  });

  describe('Empty objects', function () {
    it('returns true for two empty objects', function () {
      const obj1 = {};
      const obj2 = {};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });
  });

  describe('Simple objects', function () {
    it('returns true for two simple objects', function () {
      const obj1 = {a: 1};
      const obj2 = {a: 1};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });

    it('returns false for two differing-by-value simple objects', function () {
      const obj1 = {a: 1};
      const obj2 = {a: 2};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });

    it('returns false for two differing-by-key simple objects', function () {
      const obj1 = {a: 1};
      const obj2 = {b: 1};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });
  });

  describe('Nested objects', function () {
    it('returns true for two nested objects', function () {
      const obj1 = {b: 'bb', c: {a: 1}};
      const obj2 = {b: 'bb', c: {a: 1}};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });

    it('returns false for one simple and one nested object', function () {
      const obj1 = {b: 'bb', c: {a: 1}};
      const obj2 = {b: 'bb'};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);

      const obj3 = {b: 'bb'};
      const obj4 = {b: 'bb', c: {a: 1}};
      expect(circularDeepIdentity(obj3, obj4)).to.equal(false);
    });

    it('returns false for two differing-by-value nested objects', function () {
      const obj1 = {b: 'bb', c: {a: 1}};
      const obj2 = {b: 'bb', c: {a: 2}};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });

    it('returns false for two differing-by-key nested objects', function () {
      const obj1 = {b: 'bb', c: {a: 1}};
      const obj2 = {b: 'bb', c: {b: 1}};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });
  });

  describe('Circular objects', function () {
    it('returns true for equivalent circular objects', function () {
      const obj1 = {};
      obj1.b = obj1;
      const obj2 = {};
      obj2.b = obj2;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });

    it('returns true for equivalent nested circular objects', function () {
      const obj1 = {};
      obj1.b = {c: obj1};
      const obj2 = {};
      obj2.b = {c: obj2};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(true);
    });

    it('returns false for non-equivalent circular objects', function () {
      const obj1 = {};
      obj1.b = obj1;
      const obj2 = {};
      obj2.c = obj2;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });

    it('returns false for non-equivalent circular objects', function () {
      const obj1 = {};
      obj1.b = obj1;
      const obj2 = {a: 5};
      obj2.c = obj2;
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });

    it('returns false for non-equivalent nested circular objects', function () {
      const obj1 = {};
      obj1.b = {c: obj1};
      const obj2 = {a: 5};
      obj2.b = {c: obj2};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });

    it('returns false for non-equivalent nested circular objects', function () {
      const obj1 = {};
      obj1.b = {c: obj1};
      const obj2 = {};
      obj2.b = {c: obj2, d: 5};
      expect(circularDeepIdentity(obj1, obj2)).to.equal(false);
    });
  });

  describe('Circular arrays', function () {
    it('returns true for equivalent circular arrays', function () {
      const arr1 = [];
      arr1.push(arr1);
      const arr2 = [];
      arr2.push(arr2);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(true);
    });

    it('returns true for equivalent nested circular arrays', function () {
      const arr1 = [];
      arr1.push([arr1]);
      const arr2 = [];
      arr2.push([arr2]);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(true);
    });

    it('returns false for non-equivalent circular arrays', function () {
      const arr1 = [];
      arr1.push(5, arr1);
      const arr2 = [];
      arr2.push(arr2);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(false);
    });

    it('returns false for non-equivalent circular arrays', function () {
      const arr1 = [];
      arr1.push(arr1);
      const arr2 = [];
      arr2.push(5, arr2);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(false);
    });

    it('returns false for non-equivalent circular arrays', function () {
      const arr1 = [];
      arr1.push(5, arr1);
      const arr2 = [];
      arr2.push(3, arr2);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(false);
    });

    it('returns false for non-equivalent circular arrays', function () {
      const arr1 = [];
      arr1.push(arr1);
      const arr2 = [5];
      arr2.push(arr2);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(false);
    });

    it('returns false for non-equivalent nested circular arrays', function () {
      const arr1 = [];
      arr1.push([arr1]);
      const arr2 = [5];
      arr2.push([arr2]);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(false);
    });

    it('returns false for non-equivalent nested circular arrays', function () {
      const arr1 = [];
      arr1.push([arr1]);
      const arr2 = [];
      arr2.push([arr2, 5]);
      expect(circularDeepIdentity(arr1, arr2)).to.equal(false);
    });
  });
});
