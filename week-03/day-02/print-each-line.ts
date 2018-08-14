declare function require(path: string): any;
'use strict';
export { };
let charEncoding = 'utf-8';

const fs = require('fs');



// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'


function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding);
  } catch (e) {
    console.log(e.message,"Unable to read file: "+ fileName);
    return null;
  }
}

console.log(readFromFile("my-fidle.txt"));

