'use strict';

import { Animal } from './animal';

export abstract class Reptile extends Animal {
  
  circulatorySystem(): void {
    throw new Error("Method not implemented.");
  }

  fly(): void {
    if (this.isHungry) {
      console.log('I am too hungry, I won\'t fly!');
    } else {
      console.log('I flew');
      this.isHungry = true;
    }
  }

  takeOff(): void {
    throw new Error("Method not implemented.");
  }

  landing(): void {
    throw new Error("Method not implemented.");
  }

}
