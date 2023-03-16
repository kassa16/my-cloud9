// JavaScript File
var readline = require('readline-sync');
var i = 10;
var input;

console.log("Hello World");
console.log("i is " + i);


do {
    input = readline.question("Enter a number(or 'q' to quit:): ");
    
    if (input === 'q'){
    console.log ('Ok, exiting.')
    }
    else {
        i += Number(input);
        console.log("i is now " + i);
    }
    
} while (input !='q');
console.log("Goodbye!");
