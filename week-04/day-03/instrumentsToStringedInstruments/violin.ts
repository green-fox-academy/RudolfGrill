'use strict';


import { StringedInstrument } from './stringedInstrument';


export class Violin extends StringedInstrument {

  constructor(name: string= "Violin", numberOfStrings: number = 4, 
  instrumnetSound: string= 'Screech') {
    
    super(name, numberOfStrings, instrumnetSound);

  }

  sound(): void {

  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.instrumnetSound}`)
  }

}
