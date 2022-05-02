const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let str1 = s1.split('');
  let str2 = s2.split('');
  let count = 0;
    for(let i = 0; i < str1.length; i++){
        if(str2.indexOf(str1[i]) >= 0){
            count++;
            str2.splice(str2.indexOf(str1[i]),1);
        }
    }
    return count;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
