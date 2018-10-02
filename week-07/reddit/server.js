const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const PORT = 8080;


app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended:false}));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'REDDIT',
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'reddit.html'));
});

app.get('/newpost', (req, res) => {
  res.sendfile(path.join(__dirname, 'newpost.html'));
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/posts', (req, res) => {
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

app.post('/posts', jsonParser, (req, res) => {
  connection.query(`INSERT INTO posts (title, url) VALUES ("${req.body.title}", "${req.body.url}");`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.redirect('/');
  })
})
//});

app.put('/post/:id/upvote', jsonParser, (req, res) => {
  connection.query(`UPDATE posts SET score = score + 1 where id = ${req.params.id};`, (err, selctedPost) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id=${req.params.id};`, (err, masra) => {
      if (err) {
        console.log(err.toString());
        res.satus(500).send('Database error');
        return;
      }
      res.status(200).json({
        result: masra
      });
    })
  });
});

app.put('/post/:id/downvote', jsonParser, (req, res) => {
  connection.query(`UPDATE posts SET score = score - 1 where id = ${req.params.id};`, (err, selctedPost) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id=${req.params.id};`, (err, downvotedPost) => {
      if (err) {
        console.log(err.toString());
        res.satus(500).send('Database error');
        return;
      }
      res.status(200).json({
        result: downvotedPost
      });
    })
  });
});

app.delete('/post/:id', (req, res) => {
  connection.query(`DELETE FROM posts WHERE id=${req.params.id};`, (err) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.status(200).send(`The post is deleted where id was ${req.params.id}`);
  });
});

app.put('/posts/:id', jsonParser, (req, res) => {
  connection.query(`UPDATE posts SET title="${req.body.title}", url="${req.body.url}" WHERE id=${req.params.id};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
  });
  connection.query(`SELECT * FROM posts WHERE id=${req.params.id};`, (err, updatedPost) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.status(200).json({
      post: updatedPost
    });
  })
});

app.listen(PORT, () => {
  console.log(`server is up and runing on port ${PORT}`);
});
