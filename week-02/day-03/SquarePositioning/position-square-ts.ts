'use strict';
export{}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(xIndex: number, ) {
    ctx.fillRect(xIndex, xIndex, 50, 50)
    ctx.beginPath();

}


for (let j: number = 0; j < 3; j++) {
    let x: number = ((Math.random() * 300) + 1);
    drawSquare(x);
}