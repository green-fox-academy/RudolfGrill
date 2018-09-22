'use strict'
const express = require('express');
const app = express();
let PORT = 8080;
const path = require('path');
const fetch = require('node-fetch');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/giphy/:q', (req, res) => {
  let url = [
    'https://api.giphy.com/v1/gifs/search',
    `?api_key=4algdPetGwm5vz6jFvolLGg16DIxK4NX`,
    `&q=${req.params.q}`,
    `&limit=16&offset=0&rating=R&lang=en`
  ].join('');

  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
