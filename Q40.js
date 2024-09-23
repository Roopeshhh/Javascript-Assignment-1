// 40.Write a function that checks if a given number is prime.

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // The number is prime if no divisors were found
}

console.log(isPrime(5)); //  true
console.log(isPrime(10)); //  false
console.log(isPrime(1)); //  false
