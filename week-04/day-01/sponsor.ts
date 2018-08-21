'use stict'

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

