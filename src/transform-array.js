import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformed = [];

  let isDouble = false;
  let isDiscarded = false;

  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] === "--discard-next") {
      i++;
      isDiscarded = true;
      continue;
    }

    if((arr[i] === "--discard-prev")) {
      if((transformed.length > 0) && (!isDiscarded)) {
        transformed.pop();
        isDiscarded = true;  
      }
      continue;
    }

    if((arr[i] === "--double-next")) {
      if(((i + 1) < arr.length)) {
        transformed.push(arr[i + 1]);
      }
      continue; 
    }

    if((arr[i] === "--double-prev")) {
      if((transformed.length > 0) && (!isDiscarded)) {
          transformed.push(transformed[transformed.length - 1]);
      }
      continue;
    }

    transformed.push(arr[i]);
    isDiscarded = false;
    isDouble = false;

/*     if (!isNaN(+arr[i])) {
      if (isDouble) {
        transformed.push(arr[i] * 2);
        isDouble = false;
      }
      else {
        transformed.push(arr[i]);        
      }
      isDiscarded = false;
    } else {
      transformed.push(arr[i]);
      isDiscarded = false;
      isDouble = false;
    } */


/*     if((arr[i] === "--discard-prev") && (transformed.length > 0)) {
      transformed.pop();
    } else if((arr[i] === "--double-prev") && (transformed.length > 0)) {
      transformed[transformed.length - 1] *= 2;
    } else if(arr[i] === "--discard-next") {
      i++;
    } else if((arr[i] === "--double-next") && ((i + 1) < arr.length))  {
      i++;
      transformed.push(arr[i] * 2);
    } else if ((arr[i] !== "--discard-prev") && (arr[i] !== "--double-prev") && (arr[i] !== "--discard-next") && (arr[i] !== "--double-next")) {
      transformed.push(arr[i]);
    } */
  }

  return transformed;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// console.log( transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));