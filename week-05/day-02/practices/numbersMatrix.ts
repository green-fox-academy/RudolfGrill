'use strict'
declare function require(path: string): any;
export { }

const fs = require('fs');
const charEncoding = 'utf-8'

function readFromFile(fileName: string) {
  return fs.readFileSync(fileName, charEncoding)
}

//console.log(readFromFile('matrix.txt'));
function summedNumbers(inputFile: string): number {
  let readMatrix: string = readFromFile(inputFile);
  let withoutN: string = readMatrix.replace(/\n/gi, ' ');
  let splittedArray: number[] = withoutN.split(' ').map(function (item) {
    return parseInt(item, 10)
  });
  let summedNumbers: number = 0;
  for (let i = 0; i < splittedArray.length; i++) {
    summedNumbers += splittedArray[i];
  }
  return summedNumbers;
}

console.log(summedNumbers('matrix.txt'));

/*let readMatrix: string = readFromFile('matrix.txt')
console.log(readMatrix);
let splitArray: string[] = readMatrix.split('\n');
console.log(splitArray);*/