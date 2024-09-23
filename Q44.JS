// 44.Write a function that finds the maximum value in an array

function findMax(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [10, 5, 8, 20, 3];
console.log(findMax(numbers)); // 20
