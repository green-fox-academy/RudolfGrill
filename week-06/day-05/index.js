'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 console.log("")
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});