import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  
/*   let s1Set = new Set(s1.split(""));
  let s2Set = new Set(s2.split(""));

  let count = 0;
  for(let char of s1Set) {
    if(s2Set.has(char)) count++;
  }
 */

  let array1 = s1.split("");
  let array2 = s2.split("");
  let s1length = s1.length;
  let checked = 0;

  let i = 0;
  let count = 0;
  outer: while (true) {
    let j = 0;
    if (checked >= s1length) {
      break outer;
    }   
    while (true) {
      if (j >= array2.length) {
        break;
      }
      if (array1[i] === array2[j]) {
        array1.splice(i,1);
        array2.splice(j,1);
        console.log(array1);
        console.log(array2);
        count++;
        j = 0;
        continue;
      }
      console.log(i);
      console.log(j);
      j++;
    }
    checked++;
    i++;
  }

  return count;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

console.log(getCommonCharacterCount('', 'abc'));
