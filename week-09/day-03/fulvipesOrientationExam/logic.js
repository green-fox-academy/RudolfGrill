let matrix1 = '123\r\n456\r\n789';
let matrix2 = '913\r\n252\r\n841';

let stringArray1 = matrix1.split('\r\n');
let stringArray2 = matrix2.split('\r\n');
console.log(stringArray1);
console.log(stringArray2);




const increasingRow = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let x = 0; x < input.length - 1; x++) {
      if (input[i][x] > input[i][x + 1]) {
        return false;
      }
    }
  }
  return true;
};


const increasingColumn = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let x = 0; x < input.length - 1; x++) {
      if (input[i][x] > input[i+1][x]) {
        //console.log(input[i][x]);
        //console.log(input[i+1][x]);
        return false;
      }
    }
  }
  return true;
};



//console.log(increasingRow(stringArray1));
//console.log(increasingRow(stringArray2));

console.log(increasingColumn(stringArray1));
console.log(increasingColumn(stringArray2));