export{};
// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let j: any;
let integers: number [] = [4, 5, 6, 7];

/*for (j in  integers) {
    console.log(integers[j]);
}*/


let printAll = function(element: number){
  console.log(element);
}

integers.forEach(printAll);