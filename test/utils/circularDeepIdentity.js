const obj1s = new WeakMap();
const obj2s = new WeakMap();

/**
 * @param {unknown} obj1
 * @param {unknown} obj2
 * @param {KeyResult} [keyResult]
 * @param {(u: unknown) => boolean} reusedButNotCircular
 * @param {string[]} [paths]
 * @returns {boolean}
 */
function _circularDeepIdentity (
  obj1, obj2, keyResult = {}, reusedButNotCircular = null, paths = []
) {
  paths = [...paths];

  // If obj1 is not an object, do identity check
  if (
    !obj1 || typeof obj1 !== 'object' ||
    !obj2 || typeof obj2 !== 'object' ||
    obj1 === obj2
  ) {
    if (obj1 !== obj2) {
      keyResult.unmatchedPath = JSON.stringify(paths);
      keyResult.unmatchedValue1 = obj1;
      keyResult.unmatchedValue2 = obj2;
    }
    return obj1 === obj2;
  }

  // We've been here before with obj1
  if (obj1s.has(obj1) && (
    !reusedButNotCircular || !reusedButNotCircular(obj1)
  )) {
    keyResult.circularPath = JSON.stringify(paths);
    // console.log('111', obj1, obj2, obj1s.get(obj1) === obj2,
    //   obj2s.has(obj2),
    //   obj2 && typeof obj2 === 'object');
    return obj1s.get(obj1) === obj2 &&
      obj2s.has(obj2) &&
      obj2 && typeof obj2 === 'object';
  }

  // Remember association of this object to the other
  obj1s.set(obj1, obj2);
  obj2s.set(obj2, obj1);

  let result = true;
  // for (const [key, val] of Object.entries(obj1)) {
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      const val = obj1[key];

      result = result &&
        _circularDeepIdentity(
          val, obj2[key], keyResult, reusedButNotCircular, [...paths, key]
        );

      if (!result) {
        break;
      }
    }
  }

  return result;
}

/**
 * @typedef {{
 *   circularPath?: string,
 *   unmatchedPath?: string,
 *   unmatchedValue1: unknown,
 *   unmatchedValue2: unknown
 * }} KeyResult
 */

/**
 * @param {unknown} obj1
 * @param {unknown} obj2
 * @param {(u: unknown) => boolean} reusedButNotCircular
 * @param {KeyResult} keyResult1
 * @param {KeyResult} keyResult2
 * @returns {boolean}
 */
function circularDeepIdentity (
  obj1, obj2, reusedButNotCircular, keyResult1, keyResult2
) {
  // Need to check both as one may have more paths and thus its distinct ones
  //   not detected if only iterating through one object
  const res1 = _circularDeepIdentity(
    obj1, obj2, keyResult1, reusedButNotCircular
  );
  return res1 && _circularDeepIdentity(
    // eslint-disable-next-line sonarjs/arguments-order -- Intentional
    obj2, obj1, keyResult2, reusedButNotCircular
  );
}

export default circularDeepIdentity;
