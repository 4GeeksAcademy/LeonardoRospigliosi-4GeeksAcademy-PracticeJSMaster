function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let valor= (word1+ word2 + word3).length;
  return valor;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
