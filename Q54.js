// 54.Write a function that counts the occurrences of each character in a string and stores them in an
// object

function countCharacters(str) {
  const characterCount = {};

  for (let char of str) {
    // Ignore spaces if needed
    if (char !== " ") {
      characterCount[char] = (characterCount[char] || 0) + 1;
    }
  }

  return characterCount;
}

const inputString = "hello world";
const occurrences = countCharacters(inputString);
console.log(occurrences);
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
