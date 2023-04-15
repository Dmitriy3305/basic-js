const { NotImplementedError } = require ('../extensions/index.js');

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
  let result = [];
  if (Array.isArray(members)) {
    for (let name of members) { 
      if (typeof name == 'string') {
        name = name.trimStart();
        result.push(name[0].toUpperCase());
        result.sort();
      }
    }
    return result.join('')
  } else {
    return false
  }
}
/* AssertionError: expected '  DET' to equal 'BDETV'*/

module.exports = {
  createDreamTeam
}
