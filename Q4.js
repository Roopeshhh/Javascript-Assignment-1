// 4. Increment and Decrement Operators

// • Declare a variable x with an initial value (e.g., x = 10).
let x = 10;

// • Use the increment (++) and decrement (--) operators to increase and decrease the value of x, both in pre-increment and post-increment forms.
let postfix_Increment = x++;
console.log("postIncrement is " + postfix_Increment); //postIncrement is 10
console.log("x is " + x); //x is 11
let postfix_Decrement = x--;
console.log("postdecrement is " + postfix_Decrement); //postdecrement is 11
console.log("x is " + x); //x is 10

x = 5; //x=5
let prefix_Increment = ++x;
console.log("prefix_Increment is " + prefix_Increment); //prefix_Increment is 6
console.log("x is " + x); //x is 6
let prefix_Decrement = --x;
console.log("prefix_Decrement is " + prefix_Decrement); //prefix_Decrement is 5
console.log("x is " + x); //x is 5
