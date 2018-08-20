class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = "unknown", age: number, gender: string) {
    this.name = "Jane Doe";
    this.age = 30;
    this.gender = "female";
  }

  introduce() {
    console.log("Hi, I\'m" + name + "a" + this.age + "years old" + this.gender);
  }

  gerGoal() {
    console.log("My goal is: Live for the moment!");
  }
}

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays: number) {
    this.name = "Jane Doe";
    this.age = 30;
    this.gender = "female";
    this.previousOrganization = "The School of Life";
    this.skippedDays = 0;
  }

  getGoal() {
    console.log("Be a junior software developer.");
  }

  intorduce() {
    console.log("Hi, I\'m" + name + "a" + this.age + "years old" + this.gender + ", from" + this.previousOrganization + ", who skipped" + this.skippedDays + "days from the course already.");
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string = "unknown", age: number, gender: string, level: string) {
    this.name = "Jane Doe";
    this.age = 30;
    this.gender = "female";
    this.level = "intermediate";
  }

  getGoal() {
    console.log("Educate brilliant junior software developers.")
  }

  intorduce() {
    console.log("Hi, I'm" + this.name + ", a " + this.age + "year old " + this.gender + this.level + "mentor.");
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name: string = "unknown", age: number, gender: string, company: string, hiredStudents: number) {
    this.name = "Jane Doe";
    this.age = 30;
    this.gender = "female";
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log("Hi, I'm " + this.name + ", a " + this.age + "year old" + this.gender + " who represents" + this.company + " and hired " + this.hiredStudents + " students so far.");
  }

  hire() {
    this.hiredStudents++
  }
  getGoal() {
    console.log("Hire brilliant junior software developers.");
  }
}

