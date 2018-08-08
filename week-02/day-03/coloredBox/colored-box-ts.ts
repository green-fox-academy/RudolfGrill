'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(100,  50);
ctx.lineTo(300, 50);
ctx.stroke();

ctx.strokeStyle = 'gold';
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(300, 250);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(100, 250);
ctx.stroke();

ctx.strokeStyle = 'darkmagenta';
ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(100,  50);
ctx.stroke();



/*ctx.strokeStyle = 'green';
ctx.strokeStyle = 'gold';

ctx.beginPath();
ctx.moveTo(100,  50);
ctx.lineTo(300,  50);
ctx.lineTo(300, 250);
ctx.lineTo(100, 250);
ctx.lineTo(100,  50);
ctx.stroke();
*/