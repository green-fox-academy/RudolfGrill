'use strict';

window.onload = () => {
  const favouritePet = document.querySelector('#signUp');
  const catLover = document.querySelector('#loveCats');

  console.log(favouritePet);
  //console.log(catLover);

  favouritePet.addEventListener('signUp', (event) => {
    console.log(event);
  });
};