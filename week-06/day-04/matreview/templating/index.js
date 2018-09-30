'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    header: 'Green Fox Academy',
    withGoodbye: false,
  });
});

app.get('/products/:id', (req, res) => {
  res.render('home', {
    title: 'Product page',
    header: req.params.id,
    withGoodbye: req.query.withgoodbye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});