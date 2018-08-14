'use strict';
export{}

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function whoHasGotMorecandiesThan4 (list: any[]){
  let candiOwners: string []= [];
  list.forEach(element => {
      if (element['candies'] >= 4) {
        candiOwners.push(element);
      }
  });
  console.log(candiOwners); 
}

whoHasGotMorecandiesThan4(students);

