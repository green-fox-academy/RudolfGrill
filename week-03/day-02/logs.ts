'use strict';
declare function require(path: string): any;
export {};

const fs = require('fs');

const charEncoding = 'utf-8';

function writeToAFile(fileName: string, data: any): void {
  fs.writeFileSync(fileName, data);
}
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function readFile(file: string) {
  let fileContent: string[] = fs.readFileSync(file, 'utf-8').split('\n');
  return fileContent;
}

function uniqueIPs(fileName: string) {
  let listOfIPs: string[] = [];
  readFile(fileName).forEach(elem => listOfIPs.push(elem.slice(27, 38)));
  let listOfUniqueIPs: string[] = [];
  listOfIPs.forEach(function (item) {
    if (listOfUniqueIPs.every(elem => elem !== item)) {
      listOfUniqueIPs.push(item);
    }
  });
  return listOfUniqueIPs;
  }

console.log(uniqueIPs('logs.txt'));