'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLines(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1 ,y1);
  ctx.lineTo(x2, y2 );
  ctx.stroke();
}

let num: number= 50;
let H: number = canvas.height;
let W: number = canvas.width;


for (let i = 0; i < num; i = i+1) {
  let x= i * W / (num - 1);
  let y= i * H / (num - 1);
  ctx.strokeStyle = "green";
  drawLines(0, y, x, H);
}
for (let i = 0; i < num; i = i+1) {
  let x= i * W / (num - 1);;
  let y= i * H / (num - 1);
  ctx.strokeStyle = "purple";
  drawLines(W, y, x, 0);
}


/*
ctx.beginPath();
ctx.moveTo( 0, 0);
ctx.lineTo(800, 50);
ctx.stroke();


ctx.beginPath();
ctx.moveTo( 50, 0);
ctx.lineTo(800, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(800, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(800, 200);
ctx.stroke();*/