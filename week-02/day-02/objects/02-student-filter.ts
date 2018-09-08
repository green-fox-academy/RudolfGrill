'use strict';
export { }

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function whoHasGotMoreCandiesThan4(input: any[]) {
  let studentsNames: string[] = [];
  input.forEach(elem => {
    if (elem['candies'] > 4) {
      studentsNames.push(elem['name']);
    }
  }
  );
  return studentsNames;

}
console.log(whoHasGotMoreCandiesThan4(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandies(AllStudents: any[]) {
  let sumOfCandies: number = 0;
  AllStudents.forEach(element => {
    sumOfCandies += element.candies;
  });
  return sumOfCandies / AllStudents.length
}

console.log(averageCandies(students));
