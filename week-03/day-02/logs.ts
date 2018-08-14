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

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

readFromFile("logs.txt");

