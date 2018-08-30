'use strict';


const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
]


/*let totalDamageOnDorkman = dragonEvents
  .filter(function (event) {
    return event.type === 'attack'
  })
  .filter(function (event) {
    return event.target === 'player-dorkman'
  })
  .map(function(event) {
    return event.value
  })
  .reduce(function(prev, value) {
    return (prev || 0) + value
  })*/


  const totalDamageOnDorkman = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  //.reduce((prev, x) => (prev || 0) + x)
  .reduce((prev, x) => prev + x, 0) //better and more understandable

console.log(totalDamageOnDorkman);
