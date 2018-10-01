'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('yondu endpoint', (t) => {
  let distance = '100.0';
  let time = '10.0';
  request(routeModule.app)
    .get(`/yondu?distance=${distance}&time=${time}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { distance: '100.0', time: '10.0', speed: 10});
    });
  t.end();
});