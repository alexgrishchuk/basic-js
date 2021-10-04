import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  let out = [];
  let a = matrix;
  let rows = matrix.length;
  let columns = matrix[0].length;
  
  for (let i = 0; i < matrix.length; i++) {
    out.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      //middle-top
      if ((i > 0) && a[i - 1][j]) {
        count++;
      }
      
      //left-top
      if ((i > 0) && (j > 0) && a[i - 1][j - 1]) {
        count++;
      }

      //right-top
      if ((i > 0) && (j < (columns - 1)) && a[i - 1][j + 1]) {
        count++;
      }
      
      //left-middle
      if ((j > 0) && a[i][j - 1]) {
        count++;
      }

      //right-middle
      if ((j < (columns - 1)) && a[i][j + 1]) {
        count++;
      }
      
      //middle-bottom
      if ((i < (rows - 1)) && a[i + 1][j]) {
        count++;
      }

      //left-bottom
      if ((i < (rows - 1)) && (j > 0) && a[i + 1][j - 1]) {
        count++;
      }
      
      //right-bottom
      if ((i < (rows - 1)) && (j < (columns - 1)) && a[i + 1][j + 1]) {
        count++;
      }
      out[i][j] = count;
    }
  }

  return out;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
