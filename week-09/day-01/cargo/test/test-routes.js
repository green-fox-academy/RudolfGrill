'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('/rocket/fill endpoint', (t) => {
  let caliber = '.50';
  let amount = '5000';

  request(routeModule.app)
    .get(`caliber=${caliber}&amount=${amount}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { caliber = '.50', amount = '5000', shipstatus: "40%", ready: true});
    });
  t.end();
});