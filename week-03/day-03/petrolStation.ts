'use strict';
export { }

class Station {
  gasAmount: number;
  
  constructor(gasAmount: number = 1000) {
    this.gasAmount = gasAmount;
  }

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor(capacity: number = 100, gasAmount = 0) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }

}

let myCar = new Car();
let station1 = new Station();
console.log(station1);
console.log(myCar);

station1.refill(myCar);
console.log(station1);
console.log(myCar);