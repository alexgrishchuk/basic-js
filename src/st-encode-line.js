import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let rleArray = str.split("");
  let result  = [];
  let i = 0;
  while (i < rleArray.length) {

      let count = 0;
      for (let j = i; (j < rleArray.length) && (rleArray[j] === rleArray [i]); j++) {
          count++;
      }
      // result.push([count, rleArray[i]]);
      if(count > 1) {
        result.push(count + rleArray[i]);
      } else {
        result.push(rleArray[i]);
      }
      
      i += count;
  }

  return result.join("");
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(encodeLine('abbcca'));