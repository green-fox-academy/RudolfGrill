'use strict';

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
]
/*var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}*/

//var names = animals.map(function(animal) { return animal.name })


//var names = animals.map(function(animal) { animal.name + ' the ' + animal.species })

var names = animals.map((animal) => animal.name)


//var names = animals.map((x) => x.name)

console.log(names);
