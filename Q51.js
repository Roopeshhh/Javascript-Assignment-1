// 51.Create a function that returns an array of unique elements from an array

/* //Using Built in fuction
function uniqueElements(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = uniqueElements(numbers);
console.log(uniqueArray); // [1, 2, 3, 4, 5] */

/* //chatgpt using for loop
function getUniqueElements(arr) {
  let uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
}

// Example usage:
console.log(getUniqueElements([1, 2, 2, 3, 4, 4, 5]));  // Output: [1, 2, 3, 4, 5] */

