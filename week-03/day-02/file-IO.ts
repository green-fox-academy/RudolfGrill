declare function require(path: string): any;
'use strict';
export { };

const fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

//console.log(readFromFile('Hell.txt'));


function writeToAFile(fileName: string, data: string): void {
  fs.writeFileSync(fileName, data);
}

writeToAFile("Hell.txt", "Hello form Hell");

//console.log(readFromFile('Hell.txt'));


function countA(char: string): number {
  let result: number = 0;
  const fileContent: string = readFromFile("Hello.txt");
  if (fileContent !== null) {
    fileContent.split('\r\n').forEach(e => {
      e.split("").forEach(elem => {
        if (elem === char) {
          result++;
        }
      })
    });
    writeToAFile("result.txt", result);
    return result;
  }
}
console.log(countA());