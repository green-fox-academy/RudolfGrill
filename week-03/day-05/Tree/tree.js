'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth= canvas.width;
const canvasHeight = canvas.height;

function draw() {
  background(52);
  
  let len = 100;
  stroke(255); 
  line(200, height, 200, height-len); 
 }

