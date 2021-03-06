export { }
'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students


function howManyCandies(inputArray: any[]) {
    let studentCandies: number = 0;
    inputArray.forEach(object => studentCandies += object.candies);
    console.log(studentCandies);
};

howManyCandies(students);
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function sumOfAgesStudents(inputArray: any[]): number {
    let studentsAges: number = 0;
    inputArray.forEach(element => {
        if (element['candies'] < 5) {
            studentsAges += element['age'];
        }
    }

    );
    return studentsAges;
}

console.log(sumOfAgesStudents(students));
