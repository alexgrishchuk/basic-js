import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let team = [];

  for(let item of members) {
    if(typeof(item) === "string") {
      team.push(item.trim()[0].toUpperCase());
    }    
  }

  team.sort();
  return team.join('');
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));
