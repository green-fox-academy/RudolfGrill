'use strict';

//    event.preventDefault();

window.onload = () => {
  const server = 'http://localhost:8080';

  const getquestions = `${server}/questions`;

  console.log("ponic");

  fetch(getquestions)
    .then(res => res.json())
    .then(respBody => {
      
     }




















}