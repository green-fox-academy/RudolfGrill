'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

let factorialThisNumber: number = 5;

function factorio(inPutNumber: number): any {
    let factorialStart = 1;
    for (let i = 1; i <= inPutNumber; i++) {
        factorialStart = factorialStart * i;
    }
    console.log(factorialStart);
}

factorio(factorialThisNumber);
