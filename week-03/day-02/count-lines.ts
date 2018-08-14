declare function require(path: string): any;
'use strict';
export { };
let charEncoding = 'utf-8';
const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


function readFromFileAndCountLines(filePath: string): any {
  try {
    let countLines: any = fs.readFileSync('my-file.txt', charEncoding); //read the file
    //console.log(countLines);
    let content = countLines.split('\n'); //create an array,  
    //console.log(content);
    console.log(content.length);
  }
  catch (e) {
    console.log(0);
  }
}
readFromFileAndCountLines('my-text.txt');