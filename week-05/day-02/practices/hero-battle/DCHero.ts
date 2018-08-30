import { Hero } from './Hero';
'use strict'

export class DCHero extends Hero{

  constructor(name: string, motivation: number = 45){
    
    super(name, motivation);

  }

  punch(other: Hero){
    if (!(other instanceof DCHero)){
      super.punch(other);
    }
  }
}
