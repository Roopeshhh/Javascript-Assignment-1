// 5. Declare two variables, a and b, with different numerical values.

// • Compare the two variables using the following comparison operators:

// • Equal to (==)
let a = 10;
let b = "10";
let c = 10;
let d = "s";
let e = 20;
console.log(a == b); //true
console.log(a == d); //false

// • Strict equal to (===)
console.log(a === b); //false;
console.log(a === c); //true

// • Not equal to (!=)
console.log(a != b); //false

// • Strict not equal to (!==)
console.log(a !== b); //true

// • Greater than (>)
console.log(a > b); //false
console.log(e > a); //true

// • Less than (<)
console.log(a < b); //false
console.log(a < e); //true

// • Greater than or equal to (>=)
console.log(a >= b); //true
console.log(a >= e); //false

// • Less than or equal to (<=)
console.log(a <= c); //true
console.log(a <= e); //true
