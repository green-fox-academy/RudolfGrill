'use strict';
export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let factorialThisNumber: number = 5;

function factorio( inPutNumber: number){
    let factorialStart = 1;
    for (let i = 1; i <= inPutNumber; i++){
        factorialStart = factorialStart * i;
    }
    return factorialStart;
}

let answer = factorio(factorialThisNumber);
console.log(answer);
