'use strict';
export { }

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
console.log(example);

export = example;

let newexample: string = example.replace("dishwasher", "galaxy");

console.log(newexample);
