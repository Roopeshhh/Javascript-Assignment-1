// 29.Write a function calculateDiscount that:
// • Takes a total purchase amount as input.
// • Uses an statement to determine the discount percentage:
// ◦ 0% for amounts less than $50
// ◦ 10% for amounts between $50 and $100
// ◦ 20% for amounts between $100 and $200
// ◦ 30% for amounts above $200
// • Returns the final amount after applying the discount.

function calculateDiscount(totalAmount) {
  let discount = 0;

  if (totalAmount < 50) {
    discount = 0;
  } else if (totalAmount >= 50 && totalAmount < 100) {
    discount = 10;
  } else if (totalAmount >= 100 && totalAmount < 200) {
    discount = 20;
  } else {
    discount = 30;
  }

  let finalAmount = totalAmount - (totalAmount * discount) / 100;
  return finalAmount;
}

console.log(calculateDiscount(45)); // 45
console.log(calculateDiscount(75)); // 67.5
console.log(calculateDiscount(150)); // 120
console.log(calculateDiscount(250)); // 175
