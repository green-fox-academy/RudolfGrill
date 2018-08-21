'use strict';

import { Person } from './person';


export class Student extends Person {
  
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string= "K&H") {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal() {
    console.log("Be a junior software developer.");
  }

  introduce() {
    console.log(`${super.getIntroText()} , from ${this.previousOrganization}, who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

