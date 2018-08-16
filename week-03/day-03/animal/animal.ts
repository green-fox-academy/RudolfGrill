export class Animal {
  private hunger: number;
  private thirst: number;
  constructor(hunger: number = 50, thirst: number = 50){
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat (){
    this.hunger --;
  }

  drink(){
    this.thirst --;
  }

  play(){
    this.hunger ++;
    this.thirst ++;
  }
}

