// 57.Create a function that removes all falsy values (0, "", false, null, undefined, NaN) from an array

// function removeFalsyValues(arr) {
//   return arr.filter(Boolean);
// }

// const mixedArray = [0, "", false, null, undefined, NaN, 1, "Hello", 42];
// const filteredArray = removeFalsyValues(mixedArray);
// console.log(filteredArray); //  [1, "Hello", 42]

// function removeFalsyValues(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//       arr1.push(arr[i]);
//     }
//     return arr1;
//   }
// }
// const originalArray = [
//   0,
//   1,
//   false,
//   2,
//   "",
//   3,
//   "a",
//   NaN,
//   "false",
//   null,
//   undefined,
// ];
// const filteredArray = removeFalsyValues(originalArray);
// console.log(filteredArray);

function removeFalsyValues(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

const originalArray = [
  0,
  1,
  false,
  2,
  "",
  3,
  "a",
  NaN,
  "false",
  null,
  undefined,
];
const filteredArray = removeFalsyValues(originalArray);
console.log(filteredArray); //[1, 2, 3, 'a', 'false']
