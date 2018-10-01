const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let speed = req.query.distance / req.query.time;
  if (req.query.distance && req.query.time) {
    res.status(200).json({
      distance: req.query.distance,
      time: req.query.time,
      speed: speed,
    }).send();
  } else {
    res.status(400).json({ error: "No more games with me, boy!" }).send();
  }
});

module.exports = { app };