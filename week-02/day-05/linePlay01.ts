'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLines(x1, y1, x2, y2) {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(x1 + 20, y1);
  ctx.lineTo(x2, y2 + 20);
  ctx.stroke();
}

let xM: number = 40;
let yL: number = 0;
for (let i = 0; i < canvas.width; i++) {
  let xM: number = i * 10;
  let yL: number = i * 10;
  drawLines(xM, 0, 600, yL);
}


function drawLinesLeftSide(x1, y1, x2, y2) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x1, y1 + 20);
  ctx.lineTo(x2 + 20, y2);
  ctx.stroke();
}


let xML: number = 0;
let yLL: number = 0;
for (let i = 0; i < canvas.height; i++) {
  let xML: number = i * 10;
  let yLL: number = i * 10;
  drawLinesLeftSide(0, xML, yLL, 600);
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