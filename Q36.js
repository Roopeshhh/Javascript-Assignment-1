// 36.Write a function suggestClothing that:
// 1. Takes a temperature in Celsius as input.
// 2. Uses statements to suggest clothing:
// • Below 0: "Wear a heavy coat and thermal wear."
// • 0 to 15: "Wear a jacket."
// • 16 to 25: "Wear a light sweater."
// • Above 25: "Wear shorts and a t-shirt."
// 3. Return the clothing suggestion.

function suggestClothing(temperature) {
  let suggestion;

  if (temperature < 0) {
    suggestion = "Wear a heavy coat and thermal wear.";
  } else if (temperature >= 0 && temperature <= 15) {
    suggestion = "Wear a jacket.";
  } else if (temperature >= 16 && temperature <= 25) {
    suggestion = "Wear a light sweater.";
  } else if (temperature > 25) {
    suggestion = "Wear shorts and a t-shirt.";
  } else {
    return "Invalid temperature.";
  }

  return suggestion;
}

console.log(suggestClothing(-5)); //"Wear a heavy coat and thermal wear."
console.log(suggestClothing(10)); //"Wear a jacket."
console.log(suggestClothing(20)); //"Wear a light sweater."
console.log(suggestClothing(30)); //"Wear shorts and a t-shirt."
