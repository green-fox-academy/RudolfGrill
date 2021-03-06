'use strict';
export { }


class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}


function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);


//console.log(dominoes[0].values[1]);

function dominoSnake(list: Domino[]) {
    let newDominoes: number[][] = [];
    newDominoes.push(dominoes[0].values);
    for (let i = 0; i < dominoes.length; i++) {
        for (let j = 0; j < dominoes.length; j++)
            if (newDominoes[i][1] === dominoes[j].values[0]) {
                newDominoes.push(dominoes[j].values);
            }
    }
    return newDominoes;
}
console.log(dominoSnake(dominoes));