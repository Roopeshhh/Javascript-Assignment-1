// 35.Write a function calculateInvestmentReturn that:
// • Takes the principal amount, interest rate, and number of years as inputs.
// • Uses statements to determine the type of investment:
// • "Low risk" if interest rate <= 5%
// • "Medium risk" if 5% < interest rate <= 10%
// • "High risk" if interest rate > 10%

function calculateInvestmentReturn(principal, interestRate, years) {
  let investmentType;

  // Determine investment type based on interest rate
  if (interestRate <= 5) {
    investmentType = "Low risk";
  } else if (interestRate > 5 && interestRate <= 10) {
    investmentType = "Medium risk";
  } else if (interestRate > 10) {
    investmentType = "High risk";
  } else {
    return "Error: Invalid interest rate.";
  }

  // Calculate the total amount using simple interest formula
  const totalAmount = principal + ((principal * interestRate) / 100) * years;

  return {
    investmentType: investmentType,
    totalAmount: totalAmount.toFixed(2), // Return total amount rounded to 2 decimal places
  };
}

// Example usage:
const result = calculateInvestmentReturn(1000, 7, 5);
console.log(
  `Investment Type: ${result.investmentType}, Total Amount: $${result.totalAmount}`
);

// Output:
// Investment Type: Medium risk, Total Amount: $1350.00
