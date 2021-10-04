import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let set = new Set();
  let out = [];
  for(let item of names) {
    if(set.has(item)) {
      let number = 1;
      let str = item;
      while(set.has(str)) {
        str = item +"(" + number + ")";
        number++;
      }      
      set.add(str);
      out.push(str);
    } else {
      set.add(item);
      out.push(item);
    }
  }

  return out;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));