'use strict';



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
/*
let lineCount: number = 4;
let spaceCount: number = 3;
let starCount: number = 1;

let line = ''; 

for (let i: number = 0; i < lineCount; i++) {
    line = line + '*';
    console.log(line);
} */

let line = '';

for (let i: number = 0; i < lineCount; i++) {
    line += '*'; //line = line + '*';
    console.log(line);
}