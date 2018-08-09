'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let stepSize: number = 20;

let squereSize: number = 10;

let numberOfSteps: number = 19;


for (let i = 0; i < numberOfSteps; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(stepSize * i/2, stepSize * i/2, squereSize, squereSize);

}


