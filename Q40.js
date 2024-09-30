// 40.Write a function that checks if a given number is prime.

/* function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) return false;

  // 2 is the only even prime number
  if (num === 2) return true;

  // Eliminate other even numbers
  if (num % 2 === 0) return false;

  // Check divisibility starting from 3 to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false; // Not a prime number
    }
  }

  return true; // Prime number
}

console.log(isPrime(9)); // true
console.log(isPrime(7)); // false
console.log(isPrime(11));
console.log(isPrime(67));
console.log(isPrime(98));
console.log(isPrime(24)); */

/* function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  let i = 3;
  if (i <= Math.sqrt(num)) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrime(11));
console.log(isPrime(67));
console.log(isPrime(98));
console.log(isPrime(24)); */

function isPrime(n) {
  if (n < 2) return `${n} is not a prime`;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number`;
    }
  }
  return `${n} is a prime number`;
}
console.log(isPrime(97));
