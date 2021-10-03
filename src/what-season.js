import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  let dateWrapper = new Date(date);
  // console.log(dateWrapper);
  if (isNaN(dateWrapper.getDate())) {
    throw new Error('Invalid date!');
  }

  // let test = Date.parse(date.toString());
  // let test = new Date(date);
  // console.log(test);

   let keys = Object.keys(date);
   if (keys.length > 0) {
    throw new Error('Invalid date!');
   }

  // try {
    // date.getTime();
  // } catch (error) {
    // throw new Error ('Invalid date!');
  // }

  let month = date.getMonth();

  if ((month < 2) || (month === 11)) {
    return "winter";
  }

  if ((month > 1) && (month < 5)) {
    return "spring";
  }

  if ((month > 4) && (month < 8)) {
    return "summer";
  }

  if ((month > 7) && (month < 11)) {
    return "autumn";
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

/* const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
getSeason(fakeDate); */