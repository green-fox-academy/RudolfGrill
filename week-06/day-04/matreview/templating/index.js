'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    header: 'GreenFoxAcademy',
    withGoodBye: req.query.withGoodBye === 'true',
  });
});

app.get('/products/:id', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    header: req.params.id,
  });
});

app.listen(PORT, () =>{
  console.log(`The server is up and running on port ${PORT}`);
});