import BaseHero from './BaseHero';
import Punchable from './Punchable';

'use strict'

export class Hero extends BaseHero implements Punchable {
  private motivation: number;

  constructor(name: string, motiation: number) {
    super(name);
    this.motivation = motiation;
  }


  public punch(other: Punchable): void {
    if ((this.getMotivationLevel() >= 1)) {
      let damage: number = this.motivation / 1.5;
      other.bePunched(damage)
    }
  }

  public getMotivationLevel(): number {
    if (this.motivation < 25) {
      return 0;
    } else if (this.motivation <= 25 && this.motivation <= 40) {
      return 1;
    } else {
      return 2;
    }
  }

  public toString(): string {
    let heroName: string = this.getName();
    if (this.getMotivationLevel() === 0) {
      return (`${heroName} is not motivated anymore`);
    } else if (this.getMotivationLevel() === 1) {
      return (`${heroName} is  motivated .`)
    } else if (this.getMotivationLevel() === 2) {
      return (`${heroName} is well motivated.`)
    }
  }

  bePunched(damage: number): void {
    this.motivation = this.motivation - (damage / this.motivation);
  }

}
