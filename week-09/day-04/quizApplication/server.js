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

conn.connect(err => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('DATABASE Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/game', (req, res) => {
  const randomquestion = `SELECT * FROM questions ORDER BY RAND() LIMIT 1;`;
  conn.query(randomquestion, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    } else {
      let questionID = result[0].id;
      let question = result[0].question;
      console.log(questionID, question);
      const answerquery = `select answers.id, question_id, answer, is_correct from answers INNER JOIN questions ON answers.question_id=questions.id where question_id = ${questionID};`;
      conn.query(answerquery, (err, result) => {
        if (err) {
          console.log(err.toString());
          return;
        }
        console.log(result)
        res.json({
          questionId: questionID,
          question: question,
          answers: result
        })
      })
    }
  })
})

app.get('/questions', (req, res) => { //This endpoint should return all the questions.
  const questionlistquery = `SELECT questions.id, question FROM questions;`
  conn.query(questionlistquery, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result)
  })
});


app.post('/questions', (req, res) => {
const source = req.body;
const question = source.question;
const answerOne = source.answerone;
const isCorrectOne = isCorrect(source.radioone)
const answerTwo = source.answertwo;
const isCorrectTwo = isCorrect(source.radiotwo)
const answerThree = source.answerthree;
const isCorrectThree = isCorrect(source.radiothree)
const answerFour = source.answerfour;
const isCorrectFour = isCorrect(source.radiofour)

const newquestionQ = `INSERT INTO questions (question) VALUES ('${question}');`;

connection.query(newquestionQ, (err, result) => {
  if (err) {
    console.log(err.toString());
    return;
  } else {
    let questionID = result.insertId;
    // INSERT INTO tbl_name (a,b,c) VALUES(1,2,3),(4,5,6),(7,8,9);

    const insertAnsQ = `INSERT INTO answers (question_id, answer, is_correct) VALUES 
    (${questionID}, '${answerOne}', ${isCorrectOne}), 
    (${questionID}, '${answerTwo}', ${isCorrectTwo}), 
    (${questionID}, '${answerThree}', ${isCorrectThree}),
    (${questionID}, '${answerOne}', ${isCorrectFour});`
    connection.query(insertAnsQ, (err, result) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      console.log(result)
      res.redirect('/admin')
    })
  }
})
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