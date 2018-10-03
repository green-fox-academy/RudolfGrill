  const candiesNumber = document.querySelector('.candies');
  const lollypopsNumber = document.querySelector('.lollypops');
  const speedNum = document.querySelector('.speed');
  console.log(candiesNumber);
  console.log(lollypopsNumber);
  console.log(speedNum);

  const button = document.querySelector('button');
  let candiesCounter = 0;
  let lollypopsCounter = 0;
  let makeCandyRainCounter = 0;
  
  /*if (lollypopsCounter > 10) {
    return makeCandyRainCounter += 1;
  }*/
  const createCandiesButton = document.querySelector('.create-candies');
  const buyLollypopsButton = document.querySelector('.buy-lollypops');
  const candyMachineButton = document.querySelector('.candy-machine');
  console.log(createCandiesButton);
  console.log(buyLollypopsButton);
  console.log(candyMachineButton);

  createCandiesButton.addEventListener('click', (event) => {
    candiesCounter += 99;
    return candiesNumber.textContent = candiesCounter;
  });

  buyLollypopsButton.addEventListener('click', (event) => {
    if (candiesCounter >= 100) {
      lollypopsCounter += 1;
      candiesCounter -= 100;
      return lollypopsNumber.textContent += "🍭", candiesNumber.textContent = candiesCounter;;
    }
  });

  candyGenerator(() => {
    lollypopsCounter += 1;
    return candyGenerator;
  }, 1000);

  candyMachineButton.addEventListener('click', (event) => {
    candyGenerator;
  });
