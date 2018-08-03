'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cuboidLength: number = 10;
let cuboidWidth: number = 4;
let cuboidHeight: number = 5;

let SurfaceArea: number = 2 * (cuboidHeight * cuboidLength + cuboidHeight * cuboidWidth + cuboidLength * cuboidWidth);
console.log(SurfaceArea);

let volumeCuboid: number = cuboidHeight * cuboidLength * cuboidWidth;
console.log(volumeCuboid);