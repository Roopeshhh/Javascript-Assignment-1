// 2. Using const with objects and arrays

// • Create a constant object and a constant array.
const arr = [1, 2, 3, 4, 5, 6, 7]; //Array
console.log(arr);

const obj = {
  n: "numbers",
  c: "characters",
  f: "floatingPoint",
  b: "booleans",
}; //Objects
console.log(obj);

// • Try modifying the contents of the object and array (add or remove properties/items).

// Array methods
arr[8] = 9;
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, empty, 9]

// push()
arr.push(20);
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, empty, 9, 20]

// unshift()
arr.unshift(10);
console.log(arr); //[10, 1, 2, 3, 4, 5, 6, 7, empty, 9, 20]

// pop()
arr.pop();
console.log(arr); //[10, 1, 2, 3, 4, 5, 6, 7, empty, 9]

// shift()
arr.shift();
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, empty, 9]

// splice()
arr.splice(3, 2, 3, "3");
console.log(arr); //[1, 2, 3, 3, '3', 6, 7, empty, 9]

// slice()
const slicedArr = arr.slice(3, 5);
console.log(slicedArr); //[3, '3']

// includes()
console.log(slicedArr.includes(3)); //true

// indexOf()
console.log(slicedArr.indexOf(3)); //0

// join()
const arr1 = [1, 2, 3];
console.log(arr1.join(",")); //1,2,3   String

// concat()
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
console.log(arr1.concat(arr2, arr3)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// reverse()
console.log(arr1.reverse()); //[3, 2, 1]

// flat()
const arr4 = [1, 2, 3, [1, 2, [4, 67, 8, [4, 45, 6], 3, 4], 6], 7, 8]; // this array deapth=3
console.log(arr4.flat(3)); //[1, 2, 3, 1, 2, 4, 67, 8, 4, 45, 6, 3, 4, 6, 7, 8]

// Object methods

const objs = {
  n: "numbers",
  c: "characters",
  f: "floatingPoint",
  b: "booleans",
};

// to access values
console.log(objs["c"]); //characters
console.log(objs.c); //characters

// to modify
objs.b = "bbbbbb";
console.log(objs); //{n: 'numbers', c: 'characters', f: 'floatingPoint', b: 'bbbbbb'}\

// To insert
objs.a = "cccccc";
console.log(objs); //{n: 'numbers', c: 'characters', f: 'floatingPoint', b: 'bbbbbb', a: 'cccccc'}

// to delete
delete objs.a;
console.log(objs); //{n: 'numbers', c: 'characters', f: 'floatingPoint', b: 'bbbbbb'}

// returns array of keys
console.log(Object.keys(objs)); //['n', 'c', 'f', 'b']

// returns array of values
console.log(Object.values(objs)); //['numbers', 'characters', 'floatingPoint', 'bbbbbb']

// entries returns array of key value pair
console.log(Object.entries(objs)); // [Array(2), Array(2), Array(2), Array(2)]

// • Explain why these changes are allowed even though const is used.
// Changes to the contents of the object or array are allowed.
const person = {
  name: "John",
  age: 30,
};

const fruits = ["apple", "banana", "orange"];
console.log((person = { name: "Mark" })); // Error: Assignment to constant variable
fruits = ["mango", "pineapple"]; // Error: Assignment to constant variable
