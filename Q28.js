// 28.Write a function isLeapYear that:
// • Takes a year as input.
// • Uses an if-else statement to determine if the year is a leap year.
// • Returns "Leap Year" if it is, otherwise return "Not a Leap Year".
// • A year is a leap year if it is divisible by 4, except for years divisible by 100 unless they are
// also divisible by 400.

function isLeapYear(year) {
  if (year % 400 === 0) {
    return "Leap Year";
  } else if (year % 100 === 0) {
    return "Not a Leap Year";
  } else if (year % 4 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

console.log(isLeapYear(2000)); //  "Leap Year"
console.log(isLeapYear(1900)); //  "Not a Leap Year"
console.log(isLeapYear(2024)); //  "Leap Year"
console.log(isLeapYear(2023)); //  "Not a Leap Year"
