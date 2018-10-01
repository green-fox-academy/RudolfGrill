'use strict';

const test = require('tape');
const request = require('supertest');
const routeModule = require('../routes');

test('yondu endpoint', (t)=>{
  request(routeModule.app)
  .get('distance=100.0&time=10.0')
  .expect('Content-Type', /json/)
  .expect(200)
  .end()







});