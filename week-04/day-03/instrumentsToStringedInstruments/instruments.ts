'use strict';

export abstract class Instrument {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void

}
