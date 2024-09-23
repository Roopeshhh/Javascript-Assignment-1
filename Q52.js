// 52.Create a function that removes duplicate values from an array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(numbers);
console.log(uniqueArray); //[1, 2, 3, 4, 5]
