'use strict';
export { }

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let lineCount: number = 7;
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
    if (i < 3) {
        spaceCount --;
        starCount += 2;
    } else {
        spaceCount ++;
        starCount -= 2;
    }

    console.log(output);

}