declare function require(path: string): any;
'use strict';
export { };
let charEncoding = 'utf-8';
const fs = require('fs');

function writeToAFile(fileName: string, data: any): void {
  fs.writeFileSync(fileName, data);
}


// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

//let data: string = "Rudolf Grillasfsgsfd";

function writeMyNameInAFile(fileName: string, writeThisInTheFile ): any {
  try {
    fs.writeFileSync(fileName, writeThisInTheFile)
  }
  catch (e) {
    throw new Error ('Unable to write file: ' + fileName); 
  }
}


writeMyNameInAFile("my-file3.txt", "Rudolf Grill");