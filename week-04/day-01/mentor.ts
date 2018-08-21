'use stict'

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
