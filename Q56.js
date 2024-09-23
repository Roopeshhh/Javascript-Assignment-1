// 56.Write a function that finds the second minimum number in an array

function findSecondMinimum(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two distinct numbers.";
  }

  let min = Infinity;
  let secondMin = Infinity;

  for (let num of arr) {
    if (num < min) {
      secondMin = min; // Update second minimum
      min = num; // Update minimum
    } else if (num < secondMin && num > min) {
      secondMin = num; // Update second minimum
    }
  }

  return secondMin === Infinity ? "No second minimum number found." : secondMin;
}

const numbers = [10, 5, 8, 20, 15];
console.log(findSecondMinimum(numbers)); //8
