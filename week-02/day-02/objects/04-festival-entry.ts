'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type Festivalgoer = {
  name: string,
  alcohol: number,
  guns: number
}

const queue: Festivalgoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival


function securityCheck(queue: Festivalgoer[]): Festivalgoer[] {
  const allowedFestivalgoers: Festivalgoer[] = []
  queue.forEach(function (festivalgoer: Festivalgoer) {
    if (festivalgoer.guns > 0) {
      watchlist.push(festivalgoer.name);
      return
    }
    if (festivalgoer.alcohol > 0) {
      securityAlcoholLoot = securityAlcoholLoot + festivalgoer.alcohol
      festivalgoer.alcohol = 0;
    }
    allowedFestivalgoers.push(festivalgoer);
  })
  return allowedFestivalgoers;
}

console.log(securityCheck(queue));

export = securityCheck;
