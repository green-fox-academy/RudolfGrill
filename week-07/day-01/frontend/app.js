const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const path = require('path');

const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: req.query.input,
      result: 2 * req.query.input,
    })
  } else {
    res.json({
      error: "Please provide an input!"
    })
  };
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (!req.query.name) {
    res.json({
      "error": "Please provide a name!"
    })
  } else if (!req.query.title) {
    res.json({
      "error": "Please provide a title!"
    })
  };
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable) {
    res.json({
      "appended": req.params.appendable + "a"
    })
  } else {
    res.status(404).json({
      error: `no appendable is provided`
    })
  };
});
/*

function sumF(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
}

function factorioF(n) {
  if (n <= 0) {
    return 1;
  } else {
    factor(n - 1);
    return n * factor(n - 1);
  }

}

app.post('/dountil/:action', jsonParser, (req, res) => {
  let summingUntil = sumF(req.body.until);
  let factoringUntil = factorioF(req.body.until);
  if (req.params.action === 'sum') {
    res.json({
      "result": summingUntil
    })
  } else if (req.params.action === 'factor') {
    res.json({
      "result": factoringUntil
    })
  } else {
    res.json({
      error: "Please provide a number!"
    })
  }
})
*/

function sumUntil(inputNumber) {
  if (inputNumber > 0) {
    return inputNumber + sumUntil(inputNumber - 1);
  } else {
    return 0;
  }
}

function multiplyUntil(inputNumber) {
  if (inputNumber > 1) {
    return inputNumber * multiplyUntil(inputNumber - 1);
  } else {
    return 1;
  }
}

app.post('/dountil/:action', jsonParser, (req, res) => {
  let sumResult = sumUntil(req.body.until);
  let multipResult = multiplyUntil(req.body.until)
  if (req.params.action === 'sum') {
    res.json({
      "result": sumResult
    })
  } else if (req.params.action === 'factor') {
    res.json({
      "result": multipResult
    })
  } else {
    res.json({
      error: "Please provide a valid action"
    })
  }
})

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
