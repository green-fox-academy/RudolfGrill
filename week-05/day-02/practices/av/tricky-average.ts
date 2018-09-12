/* 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */
'use strict';

let exampleCase1: number[] = [1, 2, 3];
let exampleCase2: number[] = [3, 4, 5, 6];
let exampleCase3: number[] = [5, 2, 8, -1];

const abs = (numberToCheck: number): number => {
  return numberToCheck < 0 ? -numberToCheck : numberToCheck;
}

export const getTrickyAverage = (numbers: number[]): number => {
  let smallestOdd: number = null;
  let largestEven: number = null;
  for (let index: number = 0; index < numbers.length; index++) {
    if ((abs(numbers[index])) % 2 === 0 && largestEven === null) {
      largestEven = numbers[index];
    } else if ((abs(numbers[index])) % 2 === 0 && numbers[index] > largestEven) {
      largestEven = numbers[index];
    } else if ((abs(numbers[index])) % 2 === 1 && smallestOdd === null) {
      smallestOdd = numbers[index];
    } else if ((abs(numbers[index])) % 2 === 1 && numbers[index] > smallestOdd) {
      smallestOdd = numbers[index];
    }
    if (smallestOdd === null || largestEven === null) {
      throw new Error(`There is no such number to divide!`);
    }
    return (largestEven + smallestOdd) / 2;
  }

}
 
console.log(getTrickyAverage(exampleCase1));
console.log(getTrickyAverage(exampleCase2));
console.log(getTrickyAverage(exampleCase3));
