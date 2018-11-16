'use strict';
let wordnikAPI = `https://`
let getgiphyAPI = `https://api.giphy.com/v1/gifs/random?api_key=iJqcejSGW57gAMuDU42TfYJ85PcKgxWq&tag=&rating=G`;

function setup() {
  noCanvas();
  loadJSON(wordnikAPI, function (data) {
    createP(data.word);
    loadJSON(giphyAPI + data.word, function(data) {
      console.log(data.data[0].images);
      createImg(data.data[0].imgaes['fixed_height_small'].url)
    });
  });
}