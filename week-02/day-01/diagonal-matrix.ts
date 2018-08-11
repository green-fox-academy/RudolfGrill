'use strict';
export{}
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array



let matrix = [];
let matrixSize = 5;
for (let lineCounter: number= 0; lineCounter < matrixSize; lineCounter++) {
    let matrixLine = [];
    for (let zeroCreater: number = 0; zeroCreater < matrixSize - lineCounter -1 ; zeroCreater++) {
        matrixLine.push(0);
    }
    matrixLine.push(1);
    for (let addZeroToTheAnd: number = 0; addZeroToTheAnd < lineCounter; addZeroToTheAnd++) {
        matrixLine.push(0);
    }
    matrix.push(matrixLine);
}
console.log(matrix);

/*let matrix = [];
let matrixSize = 4;
for (let i: number = 0; i < matrixSize; i++) {
    let matrixRow = [];
    for (let j: number = 0; j < matrixSize - i -1 ; j++) {
        matrixRow.push(0);
    }
    matrixRow.push(1);
    for (let k: number = 0; k < i; k++ ) {
        matrixRow.push(0);  
    }
    matrix.push(matrixRow);
}
console.log(matrix);