'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


/*ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 200);
ctx.stroke();
*/
let d = getRandomNumbers
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(2, 0);
ctx.lineTo(300, 200);
ctx.stroke();


function getRandomNumbers(max: any) {
    return Math.floor(Math.random() * Math.floor(max)*100);
  }


