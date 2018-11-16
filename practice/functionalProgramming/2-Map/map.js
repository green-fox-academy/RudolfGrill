let animals = [
  {name:'Fluffykins', species:'rabbit'},
  {name:'Caro',       species:'dog'},
  {name:'Hamilton',   species:'dog'},
  {name:'Harold',     species:'fish'},
  {name:'Ursula',     species:'cat'},
  {name:'Jimmy',      species:'cat'},
];

let names = animals.map((x) => x.name + 'is a ' + x.species);

//let names = animals.map((animal) => animal.name + 'is a ' + animal.species);

/*let names = animals.map((animal)=> {
  return animal.name + 'is a ' + animal.species
 });*/

/*let names = animals.map(function(animal){
 return animal.name + 'is a ' + animal.species
});*/

/*let names = [];
for(let i = 0; i < animals.length; i++){
  names.push(animals[i].name)
};*/

console.log(names);
