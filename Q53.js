// 53.Write a function that finds the longest word in a given sentence

function findLongestWord(sentence) {
  const words = sentence.split(" "); // Split the sentence into words
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // Update longestWord if the current word is longer
    }
  }

  return longestWord;
}

const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(longestWord); //"jumps"
