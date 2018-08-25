'use strict';
export{}



// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//


let lineCount: number = 8;
let spaceCount: number = 3
let lineP: string = "% % % %";

for (let i: number = 0; i < lineCount; i++){
  if (i % 2 === 0){
    console.log(lineP);
  } else{
    console.log(` ${lineP}`);
  }
}


