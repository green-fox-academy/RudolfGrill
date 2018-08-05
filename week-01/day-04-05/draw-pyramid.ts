'use strict';
export {}
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

for (let i: number = 0; i < lineCount; i++) {
    let pyramid: string = '';
    for(let j: number = 0; j < lineCount - i; j++){
        pyramid += " ";
    } for( let k: number = 0; k < i + 1; k++){
        if(k === 0) {
            pyramid += '*';
        } else {
            pyramid += '**';
        }
    }
    console.log(pyramid);
}

