'use strict';
export { }
// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`


let name: string = "Greenfox";

function greet(inputName: string) {
    return inputName = `Greetings, dear ${inputName}!`;
}

let fulGreeting = greet(name);
console.log(fulGreeting);
