import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(direct = true) { this.direct = direct; }

  generateKey(message, key) {
    let newKey = [];
    let keyArray = key.split("");
    let size = key.length;

    let i = 0;
    while (true) {
      if (i === size) {
        i = 0;
      }

      if(newKey.length === message.length) {
        break;
      }
      newKey.push(keyArray[i]);
      i++;
    }

    return newKey.join("");
  }

  isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  encrypt(message , key) {
    if((message === undefined) || (key === undefined)) {
      throw new Error("Incorrect arguments!");
    }

    let cipherMessage = [];
    key = this.generateKey(message, key).toUpperCase();
    message = message.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      if(!this.isCharacterALetter(message[i])) {
        cipherMessage[i] = message[i];
        continue;
      }
      cipherMessage[i] = (message.charCodeAt(i) + key.charCodeAt(j)) % 26;
      cipherMessage[i] += 'A'.charCodeAt(0);
      cipherMessage[i] = String.fromCharCode(cipherMessage[i]);
      j++;
    }

    if(!this.direct) {
      cipherMessage.reverse();
    }
    // console.log(cipherMessage);
    return cipherMessage.join('');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  decrypt(message , key) {
    if((message === undefined) || (key === undefined)) {
      throw new Error("Incorrect arguments!");
    }
    let decryptMessage = [];
    key = this.generateKey(message, key).toUpperCase();
    message = message.toUpperCase();

    // console.log(key);

    for (let i = 0, j = 0; i < message.length; i++) {
      if(!this.isCharacterALetter(message[i])) {
        decryptMessage[i] = message[i];
        continue;
      }
      // console.log(message[i]);
      decryptMessage[i] = (message.charCodeAt(i) - key.charCodeAt(j) + 26) % 26;
      decryptMessage[i] += 'A'.charCodeAt(0);
      // console.log(decryptMessage[i]);
      decryptMessage[i] = String.fromCharCode(decryptMessage[i]);
      j++;
    }

    // console.log(decryptMessage);
    if(!this.direct) {
      decryptMessage.reverse();
    }
    return decryptMessage.join('');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const directMachine = new VigenereCipheringMachine();
// console.log( directMachine.encrypt('attack at dawn!', 'alphonse') );
// console.log( reverseMachine.encrypt('attack at dawn!', 'alphonse') );
const reverseMachine = new VigenereCipheringMachine(false);
console.log( reverseMachine.encrypt('attack at dawn!', 'alphonse') );
