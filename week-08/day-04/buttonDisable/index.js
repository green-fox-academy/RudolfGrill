'use strict'

window.onload = () => {
  const favouritePetButton = document.querySelector("button[type=submit]");
  const catLoverButton = document.querySelector("button[type=loveCats]");
  const favouritePetDiv = document.querySelector("#favouritePetDiv");
  const catFactDiv = document.querySelector("#catFactDiv");

  //console.log(favouritePetButton);
  //console.log(catLoverButton);
  //console.log(favouritePetDiv);
  //console.log(catFactDiv);

  favouritePetDiv.addEventListener('change', (event) => {
    if (event.target.value !== 'goldfish') {
      favouritePetButton.disabled = false;
    } else {
      favouritePetButton.disabled = true;
    }
  })
  
  catFactDiv.addEventListener('change', (event) => {
    if (event.target.value === 'yes') {
      catLoverButton.disabled = false;
      alert("Thank you, you've successfully signed up for cat facts")
    } else if (event.target.value === 'no'){
      catLoverButton.disabled = true;
      alert("Sigh, we still added you to the cat facts list");
    }
  })
};
