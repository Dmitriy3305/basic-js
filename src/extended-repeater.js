const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let finalResult = "";

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i += 1) {
      let intermediateResult = "";

      if (options.additionRepeatTimes) {
        for (let k = 0; k < options.additionRepeatTimes; k += 1) {
          if (k === options.additionRepeatTimes - 1) {
            intermediateResult += options.addition;
          } else {
            if (options.additionSeparator) {
              intermediateResult +=
                options.addition + options.additionSeparator;
            } else {
              intermediateResult += options.addition + "|";
            }
          }
        }
      } else {
        if (options.addition) {
          intermediateResult = options.addition;
        }
      }

      if (i !== options.repeatTimes - 1) {
        if (options.separator) {
          finalResult += str + intermediateResult + options.separator;
        } else {
          finalResult += str + intermediateResult + "+";
        }
      } else {
        finalResult += str + intermediateResult;
      }
    }
  } else {
    return str + options.addition;
  }

  return finalResult;
}

module.exports = {
  repeater
};
