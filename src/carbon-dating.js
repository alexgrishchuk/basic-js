import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== "string") return false;
  let sample = +sampleActivity;
  if (isNaN(sample)) {
    return false;
  }

  if(sample <= 0) return false;
  if(sample > MODERN_ACTIVITY) return false;


  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / sample) / k;
  t = Math.ceil(t);
  if(t < 0) return false;
  return t;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
