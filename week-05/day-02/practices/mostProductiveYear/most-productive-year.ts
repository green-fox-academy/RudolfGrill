/** 
 * Write a function called `findMostProductiveYear` that helps you find the most productive year for a film studio.
 * The function should take one argument, which is the name of the film studio.
 * The function should try to open the related data file named `studioname`.csv,
 * which is a comma separated file with 3 columns: name of the movie, release year, director
 * 
 *  - If we do not have any data about the studio, the function should return an error message.
 *  - If we have found data, the function should return an information message about the most productive year for studio.
 * 
 * Examples:
 *  - If we call the function with 'marvel'
 *  - should return 'marvel has made the most movies in 2017.'
 * 
 *  - If we call the method with 'ghibli':
 *  - should print, 'Cannot find studio, please try again later.'.
 * 
 * Hint: 
 *  - You can find some example files in this folder. (marvel.csv, paramount.csv)
 *  - Most productive year: The year in which the studio has made the most movies.
 */
'use strict';

declare function require(path: string): any;

//const path: string = 'paramount.csv';
//const path: string = 'ghibli.csv';

/********************************
 * Do not modify the code below *
 ********************************/
//export default findMostProductiveYear;



const fs = require('fs');

function readFile(fileName): string {
  try{
      let fileContent = fs.readFileSync(`${fileName}.csv`, 'utf-8');
      return fileContent;
  } catch {
      console.log('Cannot find studio, please try again later.');
      return '';
  }   
}

//console.log(readFile('marvel'))
/*
const output = fs.readFileSync('marvel.csv', 'utf-8')
  .trim('\,')
  .split('\n')
  .map(line => line.split('\t'))
  .filter(function (event){
    return event= number })


console.log(output);*/


const readLinesFromFile = (path: string, enc: string): string[] => {
  try {
    return fs.readFileSync(path, enc).split('\n');
  } catch (err) {
    throw new Error(`Cannot find studio`);

  }
}

const getYear = (line: string): number => {
  return parseInt(line.split(`,`)[1]);
}

const readYearsFreqFromLines = (lines: string[]): any => {
  let freq: any = {};
  lines.forEach((elem) => {
    if (freq[getYear(elem)]) {
      freq[getYear(elem)]++;
    } else {
      freq[getYear(elem)] = 1;
    }
  });
  return freq;
}

try {
  let freq: any = readYearsFreqFromLines(readLinesFromFile(path, charEnc));
  let maxFreq: number = Math.max(...Object['values'](freq));
  let mostProdYears: string[] = Object.keys(freq).filter((elem) => {
    return freq[elem] === maxFreq;
  });
  console.log(`The most prodctive year(s) ${mostProdYears} for ${path.split('.')[0]}!`);
} catch (err) {
  console.log(err.message);
}
