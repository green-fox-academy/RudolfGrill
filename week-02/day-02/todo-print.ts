'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string []= [' - Buy milk'];

let todo0: string= 'My todo';
let todo2: string= '- Download games';
let todo3: string= '  - Diablo';

todoText.unshift(todo0);
todoText.push(todo2,todo3);

console.log(todoText);

