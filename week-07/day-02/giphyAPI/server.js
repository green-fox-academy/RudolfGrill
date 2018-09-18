const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  console.log('M&M');
  //res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/v1/gifs/random', (req, res) => {
  let url = [
    'https://github.com/Giphy/giphy-js-sdk-core',
    `?api-key=1DcDMZCCWcadxlJ9u3VcOVE3SsEfM2Jd`,
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