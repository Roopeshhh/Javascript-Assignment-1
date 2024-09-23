// 27.Write a function temperatureStatus that:
// • Takes a temperature value as input.
// • Uses an statement to categorize the temperature:
// ◦ "Cold" if temperature is below 15°C
// ◦ "Warm" if temperature is between 15°C and 30°C
// ◦ "Hot" if temperature is above 30°C
// • Returns the appropriate category based on the temperature.

function temperatureStatus(temperature) {
  if (temperature < 15) {
    return "Cold";
  } else if (temperature >= 15 && temperature <= 30) {
    return "Warm";
  } else if (temperature > 30) {
    return "Warm";
  } else {
    return "Invalid Input";
  }
}

console.log(temperatureStatus(10)); //  "Cold"
console.log(temperatureStatus(20)); //  "Warm"
console.log(temperatureStatus(35)); //  "Hot"
console.log(temperatureStatus("ss")); //"Invalid Input"
