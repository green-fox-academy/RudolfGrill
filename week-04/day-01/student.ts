'use stict'
import { Person } from "./person.";


export class Student extends Person {
  
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays: number) {
    super();
    this.previousOrganization = "The School of Life";
    this.skippedDays = 0;
  
  }

  getGoal() {
    console.log("Be a junior software developer.");
  }

  introduce() {
    console.log(`Hi, I\'m ${this.name} a ${this.age} years old ${this.gender} ,
     from ${this.previousOrganization} , 
     who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}
