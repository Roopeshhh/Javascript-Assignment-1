// 6. Comparison between different data types

// • Declare a variable x with a value of 5 (number).
let x = 5;

// • Declare a variable y with a value of '5' (string).
let y = "5";

// • Compare x and y using both == and ===. Explain the difference between the two results.
console.log(x == y); //true
console.log(x === y); //false

// == : it will not compare data type, it converts the string to number, if the data is letter or some other data type then it returns false
//  === : it compares for data type also.
