// 55.Write a function that finds the second largest number in an array

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two distinct numbers.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest; // Update second largest
      largest = num; // Update largest
    } else if (num > secondLargest && num < largest) {
      secondLargest = num; // Update second largest
    }
  }

  return secondLargest === -Infinity
    ? "No second largest number found."
    : secondLargest;
}

const numbers = [10, 5, 8, 20, 15];
console.log(findSecondLargest(numbers)); // 15
