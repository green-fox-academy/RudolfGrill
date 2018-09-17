const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const path = require('path');

const PORT = 3000;

app.use('/assets', express.static('assets'));

function sum(inputArray) {
  let sumArr = 0;
  inputArray.forEach(element => {
    sumArr += element;
  })
  return sumArr;
}

function multiply(inputArray) {
  let multipleA = 1;
  inputArray.forEach(element => {
    multipleA = multipleA * element;
  })
  return multipleA;
}

function double(inputArray) {
  return inputArray.map(element => element * 2)
}

app.post('/arrays', jsonParser, (req, res) => {
  let sumOfArray = sum(req.body.numbers);
  let multipleOfArray = multiply(req.body.numbers);
  let doubleOfArray = double(req.body.numbers);

  if (req.body.what === "sum") {
    res.json({
      "result": sumOfArray
    })
  } else if (req.body.what === "multiply") {
    res.json({
      "result": multipleOfArray
    })
  } else if (req.body.what === "double") {
    res.json({
      "result": doubleOfArray
    })
  } else {
    res.json({
      error: "Please provide a valid action"
    })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
