// 1. Create three variables using 'var', 'let', and 'const'.

// *'var'
var names;

// *'let'
let age;
// age is a variable

// *'const'      //'const' declarations must be initialized.
const city = "Birur";

// *Redeclare and reassign the 'var' variable.
var names = "Jeevan";
console.log(names);

// *Redeclare and reassign the 'let' variable.
let age = 3; //we cannot re-declare the value because let is block scope variable, but we can re-initialize the variable using 'let'.
age = 22;
age = 33; //now age is 33 i.e re-initialization

// *Redeclare and reassign the 'const' variable.
const city = "Kadur";
city = Bangaluru;
console.log(city); //We cant re-declare or re-initialize the value using 'const', because it is block scope variable
