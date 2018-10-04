'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'quiz_app',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('DATABASE Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/game', (req, res) => {
    conn.query(`SELECT questions.id as question_id, question, answers.id, answer, is_correct FROM questions INNER JOIN answers ON questions.id = answers.question_id`, (error, result) => {
    if (error) {
      console.log('Error connecting to database', error.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).send(result)
    })
  
});

app.get('/questions', (req, res) => {

});

app.post('/questions', (req, res) => {

})

app.delete('/questions/id', (res, req) => {

});







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//****************Functions**********************//
let max = 10;

const randomNumbers = (max) => {

  return Math.floor(Math.random() * Math.floor(max));

}

let myQuery = `SELECT 
questions.id as question_id,
question,
answers.id,
answer,
is_correct
FROM questions
    INNER JOIN answers ON questions.id = answers.question_id
     WHERE question.id=(${randomNumbers});`