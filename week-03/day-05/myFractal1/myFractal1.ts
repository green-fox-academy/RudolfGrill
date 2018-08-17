'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = getRandomColor();

function getRandomColor() {
  let letters: string = '0123456789ABCDEF';
  let color: string = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawSquares(xCor: number, yCor: number, size: number, loop: number) {
  if (loop > 5) {
    ctx.strokeRect(xCor + size, yCor, size, size);
    ctx.strokeRect(xCor, yCor + size, size, size);
    ctx.strokeRect(xCor + 2 * size, yCor + size, size, size);
    ctx.strokeRect(xCor + size, yCor + 2 * size, size, size);

    let B: number = 3
    let newsize = size / B;
    ctx.strokeStyle = getRandomColor();
    drawSquares(xCor + B * newsize, yCor, newsize, loop - 1);
    ctx.strokeStyle = getRandomColor();

    drawSquares(xCor, yCor + B * newsize, newsize, loop - 1);
    ctx.strokeStyle = getRandomColor();

    drawSquares(xCor + 2 * B * newsize, yCor + B * newsize, newsize, loop - 1);
    ctx.strokeStyle = getRandomColor();

    drawSquares(xCor + B * newsize, yCor + 2 * B * newsize, newsize, loop - 1);



  } else {

  }
}
drawSquares(0, 0, canvas.height / 3, 10);