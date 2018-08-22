'use strict';

class Aircraft {
  private typeOfAircraft: string;
  private ammo: number;
  private damage: number;
  constructor(typeOfAircraft: string, ammo: number = 0, damage: number) {
    this.typeOfAircraft = typeOfAircraft;
    if (){
      
    }
    this.ammo = ammo;
    this.damage = damage;
  }



//fight
//It should use all the ammos (set it to 0) and it should return the damage it deals
//The damage is the multiplication of the base damage and the ammos
  fight() {

  }
}

export class F16 {
  private ammo: number;
  private damage: number;

  constructor(ammo: number = 0, damage: number = 30) {
    this.ammo = ammo;
    this.damage = damage;
  }


}

export class F35 {
  private ammo: number;
  private damage: number;

  constructor(ammo: number = 0, damage: number = 50) {
    this.ammo = ammo;
    this.damage = damage;
  }
}

let F16_1 = new F16;
let F35_1 = new F35;

console.log(F35_1);
console.log(F16_1);