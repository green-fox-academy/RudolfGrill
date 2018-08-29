import { test } from 'tape';

import getTrickyAverage from './tricky-average';


test('your test case 1', (t) => {
  let numbers: number[] = [1, 2, 3];
  let expected: number = getTrickyAverage(numbers);
  t.equal(1.5, expected);
  t.end();
});

test('your test case 2', (t) => {
  let numbers: number[] = [3, 4, 5, 6];
  let expected: number = getTrickyAverage(numbers);
  t.equal(4.5, expected);
  t.end();
});

test('your test case 3', (t) => {
  let numbers: number[] = [5, 2, 8, -1];
  let expected: number = getTrickyAverage(numbers);
  t.equal(3.5, expected);
  t.end();
});