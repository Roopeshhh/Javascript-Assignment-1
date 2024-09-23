// 8.Compare arrays and objects
// • Declare two empty arrays, arr1 and arr2, and compare them using == and ===.
let arr1 = [];
let arr2 = [];
console.log(arr1 == arr2); //false
console.log(arr1 === arr2); //false

// • Declare two empty objects, obj1 and obj2, and compare them using == and ===.
let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false

// • Explain why the comparisons return the result they do.

// Array
// In JavaScript, when you compare two arrays using the == or === operators, it checks for reference equality, not the content of the arrays.
// This means it checks if both variables point to the same object in memory.
// arr1 and arr2 are two different arrays, each with its own reference in memory.
// Therefore, arr1 == arr2 or arr1 === arr2 will return false because they are not the same object, even though they have the same content.

// Objects
// The same principle applies to empty objects in JavaScript. When you compare two empty objects using == or ===,
//  it checks for reference equality, not the content.
// Here, obj1 and obj2 are two different objects with their own references in memory. Therefore,
// obj1 == obj2 or obj1 === obj2 will return false because they are not the same object, even though they are both empty.
