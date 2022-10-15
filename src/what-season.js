const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == null || date == undefined) {
    return 'Unable to determine the time of year!';
  } else if (date instanceof Date) {
      if (date.getMonth() > 10 || date.getMonth() < 2) {
        return 'winter'
      }
      if (date.getMonth()> 1 && date.getMonth() < 5) {
        return 'spring'
      }
      if (date.getMonth() > 4 && date.getMonth() < 8) {
        return 'summer'
      }
      if (date.getMonth() > 7 && date.getMonth() < 11 ) {
        return 'autumn'
      }
  } else {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
