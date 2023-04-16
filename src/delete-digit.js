const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberMax = 0;
  let numberToStr = n.toString(); 
  for (let i = 0; i < numberToStr.length; i++) {
    let newNumberToStr = numberToStr.slice(0, i) + numberToStr.slice(i + 1); 
    if (+ newNumberToStr > numberMax) { 
      numberMax = + newNumberToStr;
    }
  }
  return numberMax;
}

module.exports = {
  deleteDigit
};
