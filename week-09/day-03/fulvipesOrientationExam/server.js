'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '12345',
 database: 'matrix'
});

connection.connect(function (err) {
 if (err) {
   console.log('Error connecting to Db', err.message);
   return;
 }
 console.log('Connection established');
});

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/matrices/validtype', (req, res) => {
 let rawMatrix = req.body.matrix_numbers;

 let query = `INSERT INTO matrices (matrix_numbers) VALUES ("${rawMatrix}");`;
 console.log(query);

 connection.query(query, (err, result) => {
   if (err) {
     console.log(err.toString());
     res.status(500).send('Database error');
   }
   res.status(200).json({ result });
   console.log(result);
 })
})

app.get('/matrices', (req, res) => {
 connection.query(`SELECT * FROM matrices;`, (err, result) => {
   if (err) {
     console.log(err.toString());
     res.status(500).send('Database error');
     return;
   }
   res.status(200).json({ result });
   console.log(result);
 })
})

app.listen(PORT, () => {
 console.log(`The server is up and running on ${PORT}`);
});