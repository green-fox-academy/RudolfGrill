'use strict';

const fs = require('fs');
const charEncoding = 'utf-8'
declare function require(path: string): any;


function readFromFile(fileName: string) {
  return fs.readFileSync(fileName, charEncoding)
}

function writeToAFile(fileName: string, data: any): void {
  fs.writeFileSync(fileName, data)
}

let output = fs.readFileSync('batman.csv', charEncoding)
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((batmans, line) => {
    batmans[line[0]] =  batmans[line[0]] || []
    batmans[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return batmans
  }, {})

console.log('batmans stuff', output);