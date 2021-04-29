/**
 * @param {string|number} a
 * @returns {void}
 */
function quux (a) {
  // eslint-disable-next-line no-console -- Testing
  console.log(a);
}

/**
 * @returns {void}
 */
function noArgs () {
  // eslint-disable-next-line no-console -- Testing
  console.log('No args');
}

export {quux, noArgs};
