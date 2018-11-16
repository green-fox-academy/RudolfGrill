'use strict';

let massInKg = 96.2;
let heightInM = 1.90;

// Print the Body mass index (BMI) based on these values

const BMI = (x, y) => x / (Math.pow(y, 2));

console.log(BMI(massInKg, heightInM));