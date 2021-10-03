import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let map = new Map(Object.entries(options));

  let resultStr = "";
  let repeatStr = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";

  let addition;
  if(map.has("addition")) {
    addition  = String(options.addition);
  } else {
    addition = "";
  }
  // console.log(addition);

  let additionRepeatTimes   =  options.additionRepeatTimes || 1;
  let additionSeparator  = options.additionSeparator || "|";

  let resultAdditionStr = "";
  for(let i = 0; i < additionRepeatTimes; i++){
    if (i === (additionRepeatTimes - 1) ){
      resultAdditionStr += addition;

    } else {
      resultAdditionStr += addition + additionSeparator;
    }    
  }

  repeatStr += resultAdditionStr;
  for(let i = 0; i < repeatTimes; i++){
    if (i === (repeatTimes - 1) ) {
      resultStr += repeatStr;
    } else {
      resultStr += repeatStr + separator;
    }    
  }

  return resultStr;
 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });