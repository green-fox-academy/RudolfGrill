'use strict';

let lineCount: number = 4;
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let line = '';

for (let i: number = 0; i < lineCount; i++) {
    line = line + '*';
    console.log(line);
}