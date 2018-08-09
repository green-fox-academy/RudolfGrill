'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let squereSize: number= 10;

for (let squereRepeat = 0; squereRepeat < canvas.width/squereSize; squereRepeat++) {
  ctx.fillRect(110, 110, 100, 100);
  
}

