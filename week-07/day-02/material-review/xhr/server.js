const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const cors = require('cors');
//require('dotenv').config();
const app = express();
const { cocktailList } = require('./data.js');
//const PORT = process.env.PORT;
const PORT = 3000;

app.use(cors());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/cocktails', (req, res) => {
  res.json(cocktailList);
});

app.get('/api/nytimes/:q', (req, res) => {
  let url = [
    'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    `?api-key=b1d817d4c7ba42fba825c441a198d475`,
    `&q=${req.params.q}`,
  ].join('');

  fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});