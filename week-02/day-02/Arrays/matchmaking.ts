
//use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

//console.log(makingMatches(girls, boys));


function oneGirlOneBoy(list1: string[], list2: string[]){
    let mixing: string[] = list1;
    let step: number = 0;
    for  (let i = 0; i < list1.length; i += 2) {
        mixing.splice(i, 0, boys[step]);
    }
    return(mixing);
}

console.log(oneGirlOneBoy(girls, boys));



//export = makingMatches; 