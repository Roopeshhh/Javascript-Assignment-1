// 52.Create a function that removes duplicate values from an array

/* //Using built-in-function
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(numbers);
console.log(uniqueArray); //[1, 2, 3, 4, 5] */

/* //for loop
function removeDuplicates(arr) {
  let uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5] */

/* //filter and index of method
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5] */

