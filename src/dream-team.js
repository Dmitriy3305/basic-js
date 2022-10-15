const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  result = [];
  for (let name of members) {
    if (typeof(members) == 'object' && typeof (name) == 'string') {
      result.push(name[0].toUpperCase());
      result.sort();
    }
  }
  return result.join('')
}
/* AssertionError: expected '  DET' to equal 'BDETV'*/

module.exports = {
  createDreamTeam
}
