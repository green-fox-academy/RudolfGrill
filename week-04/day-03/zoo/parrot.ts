import { Animal } from './animal';
import { Bird } from './bird';

'use strict'


export class Parrot extends Bird{



  getName(): void {
    throw new Error("Method not implemented.");
  }  
  breed(): void {
    throw new Error("Method not implemented.");
  }
  gender(): Animal {
    throw new Error("Method not implemented.");
  }


}
