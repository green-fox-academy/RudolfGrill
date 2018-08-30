'use strict'
declare function require(path: string): any;
export { }

const fs = require('fs');
const charEncoding = 'utf-8'

function readFromFile(fileName: string) {
  return fs.readFileSync(fileName, charEncoding)
}

function writeToAFile(fileName: string, data: any): void {
  fs.writeFileSync(fileName, data);
}
// Sum of each line in a matrix
function matrixSumOfLines(inputFile: string, outputFile: string) {
  let readMatrix: string = readFromFile(inputFile);
  let splittedMatrix = readMatrix.split(' ');
  let splittedStringMatrix: any[][] = [];
  let counter: number = 0;

  for (let i: number = 0; i < splittedMatrix.length; i++) {
    let temporaryArray = splittedMatrix[i].split(' ');
    splittedStringMatrix.push(temporaryArray);
  }

  for (let i: number = 0; i < splittedStringMatrix.length; i++) {
    for (let j: number = 0; j < splittedStringMatrix.length; j++) {
      splittedStringMatrix[i][j] = Number(splittedStringMatrix[i][j]);
      counter = splittedStringMatrix[i].reduce((a, b) => a + b, 0);
    }
    splittedStringMatrix[i].push(` the result of this line is ${counter}. \n`);
    counter = 0;
  }
  console.log(splittedStringMatrix);

  writeToAFile(outputFile, splittedStringMatrix)
}

matrixSumOfLines('matrix.txt', 'The-sum-of-each-line.txt');

/*
// Sum of all the digits in a string matrix
function matrixSumCounter(inputFile: string, outputFile: string) {
  let numberArray: number[] = [];
  let readMatrix: string = readFromFile(inputFile);
  let partsToErase = readMatrix.replace(/\n/gi, ' ');
  let splittedMatrix = partsToErase.split(' ');

  splittedMatrix.forEach((element) => {
    numberArray.push(Number(element));
  });
  let sumOfNumbers: number = numberArray.reduce((a, b) => a + b, 0);

  writeToAFile(outputFile, sumOfNumbers)
  return sumOfNumbers;
}

console.log(matrixSumCounter('matrix.txt', ));
*/