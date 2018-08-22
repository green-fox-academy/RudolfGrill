'use strict';


export abstract class Animal {
  protected name: string;
  protected yearOfBirth: number;

  protected isHungry: boolean;
  protected isSleepy: boolean;
  protected isDangerous: boolean;

  constructor(name: string, yearOfBirth: number, isDangerous: boolean) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isDangerous = isDangerous;
    this.isHungry = false;
    this.isSleepy = false;
  
  }

 
  abstract getName(): void
  abstract breed(): void
  abstract gender(): Animal


}
