'use strict';

const express = require('express');
const app = express();

const path = require('path');

const PORT = 3000;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  res.
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});