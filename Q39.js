// 39.Create a function that calculates the factorial of a given number.

function factorial(n) {
  if (n < 0) {
    return "negative numbers. Please enter positive integer";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(5)); // 120
