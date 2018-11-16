let animals = [
  {name:'Fluffykins', species:'rabbit'},
  {name:'Caro',       species:'dog'},
  {name:'Hamilton',   species:'dog'},
  {name:'Harold',     species:'fish'},
  {name:'Ursula',     species:'cat'},
  {name:'Jimmy',      species:'cat'},
];

let isDogs = (animal) => {
  return animal.species === 'dog'
};

let dogs = animals.filter(isDogs);
;
/*
let dogs = animals.filter(function(animal){
  return animal.species === 'dog'
});
*/
/*
let dogs = []; 

 for(let i = 0; i < animals.length; i++){
   if (animals[i].species === 'dog')
    dogs.push(animals[i])
 }
*/
console.log(dogs);
