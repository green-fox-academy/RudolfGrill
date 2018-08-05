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
let halfLineCount: number = Math.floor(lineCount / 2);

for (let i: number = 0; i < halfLineCount; i++) {
    let pyramid: string = '';
    for (let j: number = 0; j < halfLineCount - i; j++) {
        pyramid += " ";
    } for (let k: number = 0; k < i + 1; k++) {
        if (k === 0) {
            pyramid += '*';
        } else {
            pyramid += '**';
        }
    }
    console.log(pyramid);
}
for (let i: number = halfLineCount; i >= 0; i--) {
    let pyramid: string = '';
    for (let j: number = 0; j < halfLineCount - i; j++) {
        pyramid += " ";
    } for (let k: number = 0; k < i + 1; k++) {
        if (k === 0) {
            pyramid += '*';
        } else {
            pyramid += '**';
        }
    }
    console.log(pyramid);
}
