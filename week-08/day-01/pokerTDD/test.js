'use strict'

const tape = require('tape');
const businessLogic = require('./poker-tellWhosWin');
const card = require('./cards');

tape.test('One plus one equals two', t => {
  t.equal(2, businessLogic.addTwoNumbers(1, 1));
  t.end();
});

tape.test('One plus one plus one equals three', t => {
  t.equal(3, businessLogic.addThreeNumbers(1, 1, 1));
  t.end();
});

tape.test('Is it a card?', t => {
  let cardOrNot = '2D';
  t.ok(card.cardCheck(cardOrNot), 'It is a card bro');
  t.end();
});

tape.test('Is it a card?', t => {
  let cardOrNot = '2x';
  t.notOk(card.cardCheck(cardOrNot), 'NOT a card bro');
  t.end();
});

tape.test('Is it 5?', t =>{
  
});

