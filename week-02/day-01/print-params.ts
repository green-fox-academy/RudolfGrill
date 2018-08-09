'use strict';
export{}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


function printParams(...anything: any[]){
    anything.map(function(anything: any){
    console.log(anything);
    });
}

printParams("Bill", "Joe", "Smith", 17, 23);
printParams("pear", "banana", "apple", "orange");