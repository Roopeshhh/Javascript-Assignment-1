// 13.Declare a string variable str with extra spaces at the beginning and end.
// • Use the string method to remove the extra spaces and print the trimmed string.

let str = "               spaces            ";
// trim()
console.log(str.trim()); //spaces

// trimStart()
console.log(str.trimStart()); //spaces

// trimEnd()
console.log(str.trimEnd()); //               spaces
