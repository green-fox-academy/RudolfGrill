'use strict';

import { Animal } from './animal';

export abstract class Mammal extends Animal {

  circulatorySystem(): void {
    throw new Error("Method not implemented.");
  }
}
