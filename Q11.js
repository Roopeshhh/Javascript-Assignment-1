// 11.Declare a string variable sentence containing at least 10 words.
let str = "This is a example string";
let str1 = "Hello";
let str2 = "World!";
let str3 = "               spaces            ";

// • Use the all the methods of strings to extract a portion of the string and print the result.
// length()
console.log(str.length); //length 24

// charAt()
console.log(str.charAt(0)); //T

// charCodeAt()
console.log(str.charCodeAt(0)); //84

//concat()
console.log(str.concat(str1)); //This is a example stringHello

//includes()
console.log(str.includes("z")); //false
console.log(str.includes("a")); //true

//lastIndexOf()
console.log(str.lastIndexOf("T")); //0

//replace()
console.log(str.replace(" ", "_")); //This_is a example string

//replaceAll()
console.log(str.replaceAll(" ", "_")); //This_is_a_example_string

//split()
console.log(str.split()); //['This is a example string']
console.log(str.split(" ")); //['This', 'is', 'a', 'example', 'string']
console.log(str.split("")); //['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']

//slice()
console.log(str.slice(0, 3)); //Thi

// substring()
console.log(str.substring(0, 3)); //Thi

// toLowerCase()
console.log(str.toUpperCase()); //THIS IS A EXAMPLE STRING

// toUpperCase()
console.log(str.toLowerCase()); //this is a example string

// trim()
console.log(str3.trim()); //spaces

// trimStart()
console.log(str3.trimStart()); //spaces

// trimEnd()
console.log(str3.trimEnd()); //               spaces

// startWith()
console.log(str.startsWith("T")); //true
console.log(str.startsWith("a")); //false

// endsWith()
console.log(str.endsWith("T")); //false
console.log(str.endsWith("g")); //true

// repeat()
console.log(str.repeat(3)); //This is a example stringThis is a example stringThis is a example string

// padStart()
console.log(str);
console.log(str.padStart(2, "3"));
// padEnd()
