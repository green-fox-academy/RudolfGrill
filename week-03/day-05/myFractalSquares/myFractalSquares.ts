'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function beginPath(x: number, y: number){
    ctx.strokeStyle;
    ctx.moveTo(x, y);
    ctx.lineTo(x*0.5 , y * 2);
    ctx.lineTo(x/2 , y * 2);
    ctx.stroke();
}
beginPath(100,100);




function drawSquares(xCor: number, yCor: number, size: number, loop: number) {
  if (loop > 0) {
    //ctx.(xCor + size, yCor, size, size);
    

    let B: number = 3
    let newsize = size / B;
    drawSquares(xCor + B * newsize, yCor, newsize, loop - 1);
    drawSquares(xCor, yCor + B * newsize, newsize, loop - 1);
    drawSquares(xCor + 2 * B * newsize, yCor + B * newsize, newsize, loop - 1);
    drawSquares(xCor + B * newsize, yCor + 2 * B * newsize, newsize, loop - 1);



  } else {

  }
}
//drawSquares(0, 0, canvas.height / 3, 10);