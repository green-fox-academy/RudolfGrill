const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const PORT = 8080;
let books = [
  {id: 0, title: 'Book Title 1', author: 'Jane Doe'},
  {id: 1, title: 'Book Title 2', author: 'John Doe'},
  {id: 2, title: 'Book Title 3', author: 'J. D. '},
  {id: 3, title: 'Book Title 4', author: 'Anonymus'},
];

let bookId = books.length;

//Get all books
app.get('/books', (req, res) => {
  res.json({
    books,
  });
});

//Get only one specific book by its ID, ID comes from route params
app.get('/books/:id', (req, res) => {
  let id = req.params.id;
  let bookIndex = getBookIndexById(id);
  if (bookIndex) {
    res.json({
      book: books[bookIndex],
    });
  } else {
    res.json({
      error: `No book exists with id = ${id}`,
    });
  }
});

//Create a new book, data comes from request body as json
app.post('/books', jsonParser, (req, res) => {
  if (req.body && req.body.title && req.body.author) {
    let newId = bookId;
    books.push({id: newId, title: req.body.title, author: req.body.author});
    bookId++;
    res.json({
      message: `Book succesfully added with new id = ${newId}`
    });
  } else {
    res.json({
      error: 'Missing info',
    })
  }
});

//Update an existing book by its ID, data comes from request body as json
app.put('/books/:id', jsonParser, (req, res) => {
  let id = req.params.id;
  let newTitle = req.body.title;
  let newAuthor = req.body.author;
  let bookIndex = getBookIndexById(id);
  if (bookIndex && newTitle && newAuthor) {
    books[bookIndex] = {id: id, title: newTitle, author: newAuthor};
    res.json({
      message: `Book with id = ${id} succesfully updated`,
    });
  } else {
    res.status(404).json({
      error: `No book exists with id = ${id}`,
    });
  }
});

//Delete a book by ID, ID comes from request params
app.delete('/books/:id', (req, res) => {
  let id = req.params.id;
  let bookIndex = getBookIndexById(id);
  if (bookIndex) {
    books.splice(bookIndex,1);
    res.json({
      message: `Book with id = ${id} succesfully deleted`,
    });
  }
});

function getBookIndexById(id) {
  id = parseInt(id);
  let bookIndex;
  books.forEach((elem, index) => {
    if (elem.id === id) {
      bookIndex = index;
    }
  });
  return bookIndex;
}

app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
})