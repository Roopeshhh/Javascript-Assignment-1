// 41.Create a function that reverses a string.
let str = "Hello World!";

function funName(a) {
  let reversedStr = "";
  for (i = a.length - 1; i >= 0; i--) {
    reversedStr += a[i];
  }
  console.log(reversedStr);
}
funName("ABCDEFG");
funName(str);
