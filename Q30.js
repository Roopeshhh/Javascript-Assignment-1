// 30.Write a function weatherAdvice that:
// 1. Takes a weather condition (as a string: "sunny", "rainy", "snowy", "cloudy") as
// input.
// 2. Uses a switch statement to provide advice:
// • Sunny: "Wear sunglasses."
// • Rainy: "Take an umbrella."
// • Snowy: "Wear a heavy coat."
// • Cloudy: "Might rain; carry an umbrella."
// • Default: "Weather condition not recognized."
function weatherAdvice(condition) {
  switch (condition.toLowerCase()) {
    case "sunny":
      return "Wear sunglasses.";
    case "rainy":
      return "Take an umbrella.";
    case "snowy":
      return "Wear a heavy coat.";
    case "cloudy":
      return "Might rain; carry an umbrella.";
    default:
      return "Weather condition not recognized.";
  }
}

console.log(weatherAdvice("sunny")); //  "Wear sunglasses."
console.log(weatherAdvice("rainy")); //  "Take an umbrella."
console.log(weatherAdvice("snowy")); //  "Wear a heavy coat."
console.log(weatherAdvice("cloudy")); //  "Might rain; carry an umbrella."
console.log(weatherAdvice("windy")); //  "Weather condition not recognized."
