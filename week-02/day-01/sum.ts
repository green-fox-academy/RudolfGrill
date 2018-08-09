'use strict';
export{}
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let givenParameter: number = 10;


function sum (myNumbers: number) {
    let total = 0;
    for (let i = 1; i <= myNumbers; i++){
        total= total + i;
 }
 return total;

}

let answer = sum(givenParameter);
console.log(answer);

