// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ['Arthur', 'Boe', 'Chloe'];
let newFirst: string = abc[2];
let newThird: string = abc[0];

abc.splice(0, 1, newFirst);
abc.splice(2, 1, newThird);

console.log(abc);


//let abc: any = ["Arthur", "Boe", "Chloe"].reverse();
//console.log("Reversed array is : " + abc);
