'use strict';

import { StringedInstrument } from './stringedInstrument';

export class BassGuitar extends StringedInstrument {

  constructor(name: string = "Electric Guitar", numberOfStrings: number = 6, 
  instrumnetSound: string = 'Twang') {
    
    super(name, numberOfStrings, instrumnetSound);
    //this.name = name;
    //this.numberOfStrings = numberOfStrings;
    //this.instrumnetSound = instrumnetSound;
  }

  sound(): void {

  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.instrumnetSound}`)
  }

}
