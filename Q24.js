// 24.Declare an array colors with values ["red", "green", "blue", "yellow","purple"].
let colors = ["red", "green", "blue", "yellow", "purple"];

// • Use the array  method to remove the color "blue" from the array, and print the updated array.
colors.splice(colors.indexOf("blue"), 1);
console.log(colors); //  ["red", "green", "yellow", "purple"]

// • Use  the array method to add "orange" and "pink" after "green".
colors.splice(colors.indexOf("green") + 1, 0, "orange", "pink");
console.log(colors); //  ["red", "green", "orange", "pink", "yellow", "purple"]

// • Use the array method to create a sub-array with the first three colors and print it.
let subArray = colors.slice(0, 3);
console.log(subArray); //  ["red", "green", "orange"]
