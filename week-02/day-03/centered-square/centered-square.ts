 
'use strict';
export{}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let x:number = 10;

ctx.fillStyle = 'green';

ctx.fillRect(((canvas.width / 2)-x), ((canvas.height / 2)-x), x, x);


