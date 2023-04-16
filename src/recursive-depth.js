const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let i = 0;
    while (i < arr.length) {
      if (typeof(arr[i]) === "object") {
        let currCount = this.calculateDepth(arr[i]) + 1;
        if (currCount > count) {
          count = currCount;
        }
      }
      i++;
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
