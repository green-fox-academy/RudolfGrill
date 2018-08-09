'use strict';
export{}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function centerBox(xIndex: number) {
    ctx.strokeRect(((canvas.width / 2)-xIndex/2), ((canvas.height / 2)-xIndex/2), xIndex, xIndex);
    ctx.beginPath();
    
}


for (let j: number = 0; j < 3; j++) {
    let x: number = ((Math.random() * 400) + 1);
    centerBox(x);
}