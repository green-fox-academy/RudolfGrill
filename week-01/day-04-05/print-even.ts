'use strict';

// Create a program that prints all the even numbers between 0 and 500

let evennumbers: number = 0;

while(evennumbers <= 500){
  if(evennumbers % 2 == 0)
    console.log(evennumbers);
  evennumbers++;  
}
