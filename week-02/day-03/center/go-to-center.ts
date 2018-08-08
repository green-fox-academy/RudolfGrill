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

/*var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);          // Random between 0-255
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string */
/*let color = “rgb(“+ Math.floor(Math.random() * 255) + “,”+ Math.floor(Math.random() * 255) + “,”+ Math.floor(Math.random() * 255) + “)”
console.log(color); 
let color: string = rgb;*/

function drawLine(xIndex: number, yIndex: number) {
    ctx.beginPath();
    //let color: string = rgb2;
    ctx.strokeStyle //= color;
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();

};

for (let i = 0; i < 30; i++) {
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    drawLine(x, y);
}





//    Math.floor(Math.random() * 600);



