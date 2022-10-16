const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const arrayAfterDoubleOperations = arr.map((item, index) => {
    if (arr[index] === "--double-next") {
      return arr[index + 1] ? arr[index + 1] : item;
    }

    if (arr[index] === "--double-prev") {
      return arr[index - 1] && arr[index - 2] !== "--discard-next"
        ? arr[index - 1]
        : item;
    }

    return item;
  });

  const finalTransformedArray = [];

  arrayAfterDoubleOperations.forEach((item, index) => {
    if (
      arrayAfterDoubleOperations[index] === "--discard-prev" ||
      arrayAfterDoubleOperations[index] === "--discard-next"
    )
      return;
    if (arrayAfterDoubleOperations[index + 1] === "--discard-prev") return;
    if (arrayAfterDoubleOperations[index - 1] === "--discard-next") return;

    if (arrayAfterDoubleOperations[index] === "--double-prev") return;
    if (arrayAfterDoubleOperations[index] === "--double-next") return;

    finalTransformedArray.push(item);
  });

  return finalTransformedArray;
}

module.exports = {
  transform
};
