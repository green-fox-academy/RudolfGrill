declare function require(path: string): any;
'use strict';
export { };
let charEncoding = 'utf-8';
const fs = require('fs');

function writeToFile(filename: string, data: string): void {
  fs.writeFileSync(filename, data);
}

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number parameter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.


function writeMultipleLines(path: string, word: string, numberOfLines: number) {
  let multipleLines: string = '';
  for (let i= 0; i < numberOfLines; i++) {
    multipleLines = multipleLines + word + ('\n');
  }
  try { 
    writeToFile(path, multipleLines);
  } catch (e) {
    
  }
}


writeMultipleLines('myApple.txt', 'apple', 5);
writeMultipleLines('myMonkey.txt', 'monkey', 8);


