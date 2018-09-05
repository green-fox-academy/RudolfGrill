'use strict';
export { }
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



let matrixNew = [];
let matrixSizeNew: number = 4;

for (let i: number = 0; i < matrixSizeNew; i++) {
    let matrixSor = [];
    for (let ZeroAdderBeforeOne: number = 0; ZeroAdderBeforeOne < matrixSizeNew -i- 1; ZeroAdderBeforeOne++) {
        matrixSor.push(0);
    }
    matrixSor.push(1);
    for (let ZeroAfterOne: number = 0; ZeroAfterOne < i ; ZeroAfterOne++) {
        matrixSor.push(0);
    }
    matrixNew.push(matrixSor);
}
console.log(matrixNew);

