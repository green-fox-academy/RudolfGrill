'use strict';

const wordnikAPI = `http://api.wordnik.com/v4/words.json/randomWord?api_key=YourWordnikAPIkey`
const giphyAPI = `https://api.giphy.com/v1/gifs/search?rating=PG&api_key=YourGiphyAPIkey`;

function setup() {
  noCanvas();
  fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
      createP(json.word);
      return fetch(giphyAPI + json.word);
    })
    .then(response => response.json())
    .then(json => {
      createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
};
