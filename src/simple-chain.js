import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default 
//  let chainMaker = 
 {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    let strValue = (value !== undefined) ? "( " + value + " )" : "( )";
    if (this.getLength() === 0) {
      this.chainArray.push(strValue);
    } else {
      this.chainArray.push("~~" + strValue);
    }    

    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    position--;
    if(isNaN(position) || (position < 0) || (position >= this.getLength()) || (!Number.isInteger(position))) {
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chainArray.splice(position, 1);

    if(position === 0) {
      this.chainArray[0] = this.chainArray[0].slice(2);
    }    

    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chainArray.reverse();
    
    if (this.getLength() > 1) {
      this.chainArray[0] = this.chainArray[0].slice(2);
      this.chainArray[this.getLength() -1] = "~~" + this.chainArray[this.getLength() -1];
    }

    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let str = this.chainArray.join('');
    this.chainArray = [];
    return str;
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));