'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let user = 'Guest';
  if (req.query.name !== undefined) {
    user = req.query.name;
  }
  res.render('home', {
    header: user,
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});