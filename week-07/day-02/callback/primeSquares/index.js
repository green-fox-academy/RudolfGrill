'use strict';

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
let section = document.querySelector('section');

for (let i = 2; i < 101; i++) {
  section.innerHTML += `<div>${i}</div>`
}
console.log(section);

// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

let primeDetector = document.querySelectorAll('div');

for (let b = 0; b < primeDetector.length; b++) {
 // if (primeDetector % 2 === 0){
 //   primeDetector.innerHTML += `<class>${notPrime}</class>`
 // }
 primeDetector.innerHTML += `<class>${b}</class>`



}
console.log(primeDetector);


// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
  //  - the timer should fire every 100ms
  //  - the timer should stop when there are no more elements left to be colored
