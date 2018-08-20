'use strict';
export{}
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!


let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
//console.log(reverse(reversed));


function reversingThatString(inputString:string):string{
  return inputString.split('').reverse().join('');
};

console.log(reversingThatString(reversed));


//export = reverse;