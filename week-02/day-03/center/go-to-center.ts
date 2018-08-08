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
function drawLine(xIndex: number, yIndex: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();

};

//let x= Math.floor(Math.random() * 600);
//let y= Math.floor(Math.random() * 400);

for (let i = 0; i < 30; i++) {
    let x= Math.floor(Math.random() * canvas.width);
    let y= Math.floor(Math.random() * canvas.height);
    drawLine(x, y);
}





//    Math.floor(Math.random() * 600);



