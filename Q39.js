// 39.Create a function that calculates the factorial of a given number.

function factorial(n) {
  // Handle negative numbers and non-integer inputs
  if (n < 0 || !Number.isInteger(n)) {
    return "Error: Please enter a non-negative integer.";
  }

  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); //  120
console.log(factorial(0)); //  1
console.log(factorial(-3)); //  "Error: Please enter a non-negative integer."
console.log(factorial(4.5)); //  "Error: Please enter a non-negative integer."
