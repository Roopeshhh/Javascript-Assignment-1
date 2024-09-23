// 49.Create a function that generates a triangle pattern using nested for loops.

function generateTrianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += "*";
    }
    console.log(rowPattern);
  }
}

generateTrianglePattern(5);

/*
 *
 **
 ***
 ****
 *****
 */
