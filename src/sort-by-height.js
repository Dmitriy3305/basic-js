const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let i = 0;
  let sortByNum = arr.filter(item => item != -1).sort(function(a, b) {
    return a - b;
  });
  return arr.map(item => {
    if (item == -1) {
      return item;
    } 
    else if (item != -1) {
      let sortByArr = sortByNum[i];
      i++;
      return sortByArr;
    }
  });
}

module.exports = {
  sortByHeight
};
