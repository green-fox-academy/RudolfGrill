'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.




function drawLine(xIndex: number, yIndex: number) {
    ctx.beginPath();
    ctx.strokeStyle;
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(xIndex +50, yIndex);
    ctx.stroke();

};

for (let i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    drawLine(x, y);
}