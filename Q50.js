// 50.Write a function that finds the intersection of two arrays

function intersectArrays(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = intersectArrays(array1, array2);
console.log(intersection); //[4, 5]
