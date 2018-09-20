const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'REDDIT',
});


connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/posts', jsonParser, (req, res) => {
  connection.query('SELECT * FROM posts;', (err, result) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.json({
      posts: result,
    });
  });
});


app.post('/posts', (req, res) => { });

app.put('/post/<id>/upvote', (req, res) => { });

app.put('/post/<id>/downvote', (req, res) => { });

app.delete('/post/<id>', (req, res) => { });

app.put('/post/<id>', (req, res) => { });






app.listen(PORT, () => {
  console.log(`server is up and runing on port ${PORT}`);
});
