// 51.Create a function that returns an array of unique elements from an array

function uniqueElements(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = uniqueElements(numbers);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
