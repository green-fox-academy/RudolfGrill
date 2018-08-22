import { Instrument } from './instruments';

'use strict';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  protected instrumnetSound: string;

  constructor(name: string, numberOfStrings: number, instrumnetSound: string) {
    super(name);
    this.numberOfStrings = numberOfStrings;
    this.instrumnetSound = instrumnetSound;
  }

  abstract sound(): void
}