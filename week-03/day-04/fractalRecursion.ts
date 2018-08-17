'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function draw() {
  stroke(0);
  noFill();
  ellipse(widht/2, height/2,300,300);

}

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(200, 150);
ctx.stroke();

ctx.strokeStyle = 'gold';
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(300, 250);
ctx.stroke();