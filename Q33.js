// 33.Write a function advancedCalculator that:
// • Takes two numbers and an operator (as a string: "+", "-", "*", "/", "%") as input.
// • Uses a switch statement to perform the appropriate calculation.
// • Return the result of the calculation, and handle division by zero with an appropriate
// message.

function advancedCalculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      result = num1 / num2;
      break;
    case "%":
      if (num2 === 0) {
        return "Error: Modulo by zero is not allowed.";
      }
      result = num1 % num2;
      break;
    default:
      return "Error: Invalid operator. Please use '+', '-', '*', '/', or '%'.";
  }

  return `The result is: ${result}`;
}

console.log(advancedCalculator(10, 5, "+")); //  "The result is: 15"
console.log(advancedCalculator(10, 0, "/")); //  "Error: Division by zero is not allowed."
console.log(advancedCalculator(15, 7, "%")); //  "The result is: 1"
console.log(advancedCalculator(10, 5, "^")); //  "Error: Invalid operator. Please use '+', '-', '*', '/', or '%'."
