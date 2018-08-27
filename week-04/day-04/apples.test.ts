'use strict';

import { fruitBasket } from './apples';
import test from 'tape';

test('One should match with the other', (test) => {
  test.equal(fruitBasket.getApple(), 'apple', 'should be the same');
  test.end();
});