declare function require(path: string): any;
'use strict';
export { };

const fs = require('fs');

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let myDivider: number = 0;

function dividesByTen(divider: any): any {
  try {
    if (divider === 0) {
      throw new Error("ERROR")
    }
    if (typeof divider != "number") {
      throw new Error("The divider is not a number!");
    }
    let result: number = 10 / divider;
    return result;
  } catch (e) {
    console.log(e.message);
    return "fail";
  }
}
console.log(dividesByTen(myDivider));
