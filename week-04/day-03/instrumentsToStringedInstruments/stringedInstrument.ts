import { Instrument } from './instruments';

'use strict';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: string;
 
  sound(): void ;

  play(){
    
  }
}
