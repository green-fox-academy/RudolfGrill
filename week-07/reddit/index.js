const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static('assets'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'reddit',
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'index.html'));
});

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/api/post', (req, res) => { });
app.post('/api/post', (req, res) => { });
app.put('/api/post/<id>/upvote', (req, res) => {});
app.put('/api/post/<id>/downvote', (req, res) => {});
app.delete('/api/post/<id>', (req, res) => {});
app.put('/api/post/<id>', (req, res) => {});

