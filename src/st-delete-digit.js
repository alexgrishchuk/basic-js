import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let s = "";
  s += n;
  let array = s.split("");

  let delStr = "";
  let max = +s.slice(1);
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    delStr = "";
    for (let j = 0; j < array.length; j++) {
      if (j != i) {
        delStr += array[j];
      } 
    }

    console.log(delStr);
     if (+delStr > max) {
       max = +delStr;
     }
  }


  return max;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}