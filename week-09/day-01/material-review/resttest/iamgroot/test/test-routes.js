'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('groot endpoint', (t) => {
  request(routeModule.app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { error: "I am Groot!" });
    });
  t.end();
});

test('groot endpoint', (t) => {
  let message = 'Hello there general Kenobi';
  request(routeModule.app)
    .get('/groot?message=' + message)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { received: message, translated: "I am Groot!" });
    });
  t.end();
});
