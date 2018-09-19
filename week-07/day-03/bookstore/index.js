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
  database: 'bookstore',
});

app.get('/', (req, res)=>{
  res.sendfile(path.join(__dirname, 'index.html'));
});

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/api/books', function (req, res) {
  connection.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id=author.aut_id INNER JOIN category ON book_mast.cate_id=category.cate_id INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id;', function (err, results) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send(results);
    console.log(results);
  });

});

app.listen(PORT, () => {
  console.log(`server is up and runing on port ${PORT}`);
});