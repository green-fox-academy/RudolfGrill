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
