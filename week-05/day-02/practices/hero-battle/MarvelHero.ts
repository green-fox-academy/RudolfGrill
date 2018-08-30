import { Hero } from './Hero';
'use strict'

export class MarvelHero extends Hero{

  constructor(name: string, motivation: number = 40){
    
    super(name, motivation);

  }

  punch(other: Hero){
    if (!(other instanceof MarvelHero)){
      super.punch(other);
    }
  }
}
