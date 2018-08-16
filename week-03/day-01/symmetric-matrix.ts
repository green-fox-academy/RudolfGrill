'use strict';
export { }

// Create a function named `isSymmetric` that takes an n×n integer matrix (two dimensional array) as parameter
// and returns true, if is that matrix is symmetric (diagonally from top-left to bottom-right)
// or false if it is not
//
// example for symmetric matrix:
// 1 0 1
// 0 2 2
// 1 2 5
//
// example for not symmetric matrix
// 7 7 7
// 6 5 7
// 1 2 1

let symmetricMatrix: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]

let symmetricMatrix2: number[][] = [
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1]
]

function isSymmetric(exampleSymmetricMatrix: number[][]): boolean {
  for (let i = 0; i < exampleSymmetricMatrix.length; i++) {
    for (let j = 1; j < exampleSymmetricMatrix.length; j++) }{
      
  break  
  }
}

isSymmetric(symmetricMatrix);
isSymmetric(symmetricMatrix2);

/*function isSymmetric(exampleSymmetricMatrix: number[][]) {
  for (let i = 0; i < exampleSymmetricMatrix.length; i++) {
    console.log(i);
    for (let j = 1; j < exampleSymmetricMatrix.length; j++) {
      console.log("*");
      if (symmetricMatrix[0][0] !== symmetricMatrix[0][1] && 
          symmetricMatrix[1][1] !== symmetricMatrix[1][2])   {
        console.log("true");
        break;
      } else {
        console.log("This is not symmetric!");
        break;
      }
    }
  }
}*/
/*
function isSymmetric(exampleSymmetricMatrix: number[][]) {
  let symmetricornot: number [][] = [];
  for (let i = 0; i < exampleSymmetricMatrix.length; i++){
    for (let j = 0; j < exampleSymmetricMatrix.length; j++){
      if (symmetricMatrix[0][2] == symmetricMatrix[2][0]  &&
      symmetricMatrix[0][1] == symmetricMatrix[1][0] &&
      symmetricMatrix[0][0] == symmetricMatrix[0][2] &&
      symmetricMatrix[1][1] == symmetricMatrix[1][2] &&
      symmetricMatrix[2][1] == symmetricMatrix[1][2] &&
      symmetricMatrix[2][1] !== symmetricMatrix[2][2] &&
      symmetricMatrix[2][0] !== symmetricMatrix[2][2]) 
        console.log("true");
      } else {
      console.log("WTF! This is not symmetric!");
    }
  }
}
isSymmetric(symmetricMatrix);
isSymmetric(symmetricMatrix2);*/