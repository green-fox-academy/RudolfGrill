'use strict';

import { StringedInstrument } from './stringedInstrument';

export class BassGuitar extends StringedInstrument {

  constructor(name: string, numberOfStrings: number, instrumnetSound: string) {
    super(name, numberOfStrings, instrumnetSound);

  }

  sound(): void {

  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.instrumnetSound}`)
  }
