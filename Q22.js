// 22.Declare an array fruits with values ["apple", "banana", "mango"].
// • Use the array method to add a new fruit "orange" to the end of the array, and print the
// updated array.
// • Use the array method to remove the last fruit from the array, and print the updated array.
// • Use the array  method to remove the first fruit from the array, and print the updated array.
// • Use the  array method to add "grape" to the beginning of the array, and print the updated
// array.
// Declare the array
let fruits = ["apple", "banana", "mango"];

// Add "orange" to the end of the array
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// Remove the last fruit from the array
fruits.pop();
console.log(fruits); // ["apple", "banana", "mango"]

// Remove the first fruit from the array
fruits.shift();
console.log(fruits); // ["banana", "mango"]

// Add "grape" to the beginning of the array
fruits.unshift("grape");
console.log(fruits); // ["grape", "banana", "mango"]
