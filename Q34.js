// 34.Write a function calculateFinalPrice that:
// • Takes the total price and membership type (as a string: "regular", "silver", "gold") as inputs.
// • Uses an  statement to apply different discounts:
// ◦ Regular: 0%
// ◦ Silver: 10%
// ◦ Gold: 20%
// • Return the final price after applying the discount.

function calculateFinalPrice(totalPrice, membershipType) {
  let discount = 0;

  if (membershipType === "regular") {
    discount = 0;
  } else if (membershipType === "silver") {
    discount = 0.1;
  } else if (membershipType === "gold") {
    discount = 0.2;
  } else {
    return "Error: Invalid membership type. Please use 'regular', 'silver', or 'gold'.";
  }

  const finalPrice = totalPrice - totalPrice * discount;

  return `The final price after applying the discount is: $${finalPrice.toFixed(
    2
  )}`;
}

console.log(calculateFinalPrice(100, "regular")); //  "The final price after applying the discount is: $100.00"
console.log(calculateFinalPrice(100, "silver")); //  "The final price after applying the discount is: $90.00"
console.log(calculateFinalPrice(100, "gold")); //  "The final price after applying the discount is: $80.00"
console.log(calculateFinalPrice(100, "platinum")); //  "Error: Invalid membership type. Please use 'regular', 'silver', or 'gold'."
