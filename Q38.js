// 38.Write a function that generates the Fibonacci sequence up to a specified number

function generateFibonacci(limit) {
  let fibonacciSequence = [0, 1]; // Starting sequence

  // Generate Fibonacci sequence up to the specified limit
  while (true) {
    let nextNumber =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];

    // Stop if the next number exceeds the limit
    if (nextNumber > limit) {
      break;
    }

    fibonacciSequence.push(nextNumber);
  }

  return fibonacciSequence;
}

console.log(generateFibonacci(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function generateFibonacci(limit) {
// let fibonacciSequence = [0, 1]; // Starting sequence

// Generate Fibonacci sequence up to the specified limit
// while (true) {
//   let nextNumber =
//     fibonacciSequence[fibonacciSequence.length - 1] +
//     fibonacciSequence[fibonacciSequence.length - 2];

//   // Stop if the next number exceeds the limit
//     if (nextNumber <= limit) {
//       fibonacciSequence.push(nextNumber);
//     } else {
//       break;
//     }
//   }

//   return fibonacciSequence;
// }

// console.log(generateFibonacci(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
