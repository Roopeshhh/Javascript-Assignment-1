// 46.Write a function that counts down from a specified number to zero  and logs each number.

function countdown(num) {
  if (num < 0) {
    console.log("Please enter a non-negative number");
    return;
  }
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

countdown(5);

// 5
// 4
// 3
// 2
// 1
// 0
