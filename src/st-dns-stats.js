import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let map = new Map();
  for (let i = 0; i < domains.length; i++) {
    let str = "." + domains[i]; 
    domains[i] = "";
    while(str.length > 0) {
      let dotPos = str.lastIndexOf(".");
      domains[i] +=  str.slice(dotPos);
      str = str.slice(0, dotPos);
    }
  }
  console.log(domains);

  for (let item of domains) {
    while(item.includes(".")) {
      if(map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
      let dotPos = item.lastIndexOf(".");
      if(dotPos === 0) break;
      item = item.slice(0, dotPos);      
    }
  }
  // console.log(Object.fromEntries(map));

  return Object.fromEntries(map);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);