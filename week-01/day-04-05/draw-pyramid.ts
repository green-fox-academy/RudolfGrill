'use strict';
export { }



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let lineCount: number = 4;
let spaceCount: number = 3
let starCount: number = 1;
let output: string = "";


for (let i = 0; i < lineCount; i++) {
    output = "";
    for (let j = 0; j < spaceCount; j++) {
        output += " ";
    }
    for (let k = 0; k < starCount; k++) {
        output += "*";
    }
    console.log(output);
    spaceCount--;
    starCount += 2;
}

