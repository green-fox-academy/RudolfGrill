'use strict'

window.onload = () => {
  const host = 'http://localhost:8080/api';
  const http = new XMLHttpRequest();
  const gifParent = document.querySelector('#gifContainer');

  http.open('GET', `${host}/giphy/cats`, true);

  console.log(http)

  http.onload = () => {
    if (http.status === 200) {
      const giphys = JSON.parse(http.response).data;
      console.log(giphys);
      giphys.forEach((elem) => {
        let newGifImage = document.createElement('img')
        gifParent.appendChild(newGifImage);
        newGifImage.setAttribute('src', elem.images.downsized.url);
        newGifImage.classList.add('thumbnail')
      });
    }
  }

  http.send();
}