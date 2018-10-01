
const express = require('express');
const app = express();

app.get('/rocket', (req, res) => {
  let caliber25 = req.query.caliber25;
  let caliber30 = req.query.caliber30;
  let caliber50 = req.query.caliber50;
  let maxAmmo = 12500;
  let ready = false;

  let shipStatusCalculator = () => {
    if (caliber25 + caliber30 + caliber50 === 0) {
      return "empty";
    } else if ((caliber25 + caliber30 + caliber50) / maxAmmo === 0.4) {
      return "40%";
    } else if ((caliber25 + caliber30 + caliber50) / maxAmmo === 1) {
      return "100%"
    } else if ((caliber25 + caliber30 + caliber50) / maxAmmo > 1) {
      return "overloaded"
    }
  }
  let shipstatus = shipStatusCalculator;

  if (shipstatus = "100%") {
    return ready = true;
  }

  if (req.query.caliber25 || req.query.caliber30 || req.query.caliber50) {
    res.status(200).json({
      caliber25: caliber25,
      caliber30: caliber30,
      caliber50: caliber50,
      shipstatus: shipstatus,
      ready: ready,
    }).send();
  } else {
    res.status(400).json({ error: "You got issues, Quill." }).send();
  }
});


app.get('/rocket/fill', (req, res) => {
  let maxAmmo = 12500;
  let ready = false;

  let shipStatusCalculator = () => {
    if (caliber25 + caliber30 + caliber50 === 0) {
      return "empty";
    } else if ((caliber25 + caliber30 + caliber50) / maxAmmo === 0.4) {
      return "40%";
    } else if ((caliber25 + caliber30 + caliber50) / maxAmmo === 1) {
      return "100%"
    } else if ((caliber25 + caliber30 + caliber50) / maxAmmo > 1) {
      return "overloaded"
    }
  }
  let shipstatus = shipStatusCalculator;

  if (shipstatus = "100%") {
    return ready = true;
  }
  if (req.query.caliber && req.query.amount) {
    res.status(200).json({
      received: req.query.caliber,
      amount: req.query.amount,
      shipstatus: shipstatus,
      ready: ready,
    }).send();
  } else {
    res.status(400).json({ error: "Where is my ammo???" }).send();
  }
});


module.exports = { app };