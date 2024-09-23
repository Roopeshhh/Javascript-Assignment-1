// 45.Write a function that finds the Minimum value in an array \

function findMin(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const numbers = [10, 5, 8, 20, 3];
console.log(findMin(numbers)); //  3
