'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let myAngle: number = 0;

ctx.rotate(myAngle * Math.PI / 180);

ctx.translate(canvas.width / 2, canvas.height / 2);

let drawRect = (myAngle) => {
  setTimeout(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.rotate(myAngle * Math.PI / 180);
    ctx.strokeRect(100, 100, 50, 50);
    myAngle += Math.random();
    drawRect(myAngle);
  },0,50);
};

drawRect(myAngle); 

