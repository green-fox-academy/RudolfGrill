'use strict';
let cardOrNot = ['2D', '8C', 'TH', 'AS', '5S'];

function cardCheck(element) {
  let regexCards = /^([2-9]|[TJQKA])([CDHS])$/;
  return regexCards.test(element);
}

module.exports = { cardOrNot , cardCheck };

function charactersToNumbers(element){
  eturn regexCards.test(element);

}