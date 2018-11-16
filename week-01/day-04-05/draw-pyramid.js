'use strict'

let lineCount = 7;
let spaceCount = 3;
let starCount = 1;
let line = '';

for (let i = 0; i < lineCount; i++) {
  line = '';
  for (let a = 0; a < spaceCount; a++) {
    line += 'S';
  }
  for (let b = 0; b < starCount; b++) {
    line += '*';
  }
  console.log(line);
  if (i < 3) {
    spaceCount--;
    starCount += 2;
  } else {
    spaceCount++;
    starCount -= 2;
  }
};
