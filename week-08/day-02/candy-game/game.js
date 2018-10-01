const candiesNumber = document.querySelector('.candies');
const lollypopsNumber = document.querySelector('.lollypops');
const speedNum = document.querySelector('.speed');
console.log(candiesNumber);
console.log(lollypopsNumber);
console.log(speedNum);

const button = document.querySelector('button');
let candiesCounter = 0;
let lollypopsCounter = 0
let makeCandyRainCounter = 0;
const createCandiesButton = document.querySelector('.create-candies');
const buyLollypopsButton = document.querySelector('.buy-lollypops');
const candyMachineButton = document.querySelector('.candy-machine');
console.log(createCandiesButton);
console.log(buyLollypopsButton);
console.log(candyMachineButton);

createCandiesButton.addEventListener('click', (event) => {
 candiesCounter += 1;
 return candiesNumber.textContent = candiesCounter;
})
