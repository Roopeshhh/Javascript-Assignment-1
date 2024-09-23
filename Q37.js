// 37.Write a function convertCurrency that:
// • Takes an amount and a currency type (as a string: "USD", "EUR", "GBP") as inputs.
// • Uses a statement to convert to a target currency:
// ◦ USD to INR: 75
// ◦ EUR to INR: 90
// ◦ GBP to INR: 100
// ◦ Default: "Invalid currency type"
// • Return the converted amount.
function convertCurrency(amount, currencyType) {
  let convertedAmount;

  // Convert currency based on currencyType
  if (currencyType === "USD") {
    convertedAmount = amount * 75; // USD to INR conversion
  } else if (currencyType === "EUR") {
    convertedAmount = amount * 90; // EUR to INR conversion
  } else if (currencyType === "GBP") {
    convertedAmount = amount * 100; // GBP to INR conversion
  } else {
    return "Invalid currency type";
  }

  return `The converted amount is: ₹${convertedAmount.toFixed(2)}`;
}

console.log(convertCurrency(100, "USD")); //  "The converted amount is: ₹7500.00"
console.log(convertCurrency(50, "EUR")); //  "The converted amount is: ₹4500.00"
console.log(convertCurrency(10, "GBP")); //  "The converted amount is: ₹1000.00"
console.log(convertCurrency(100, "AUD")); //  "Invalid currency type"
