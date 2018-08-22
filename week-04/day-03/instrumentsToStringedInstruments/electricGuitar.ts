'use strict';


import { StringedInstrument } from './stringedInstrument';



export class ElectricGuitar extends StringedInstrument {

  constructor(name: string= 'Bass Guitar', numberOfStrings: number= 4, 
  instrumnetSound: string= 'Duum-duum-duum') {
    
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
