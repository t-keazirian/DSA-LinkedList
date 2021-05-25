// Find the word frequency in an array

const array = ['Hello', 'Hello', 'Hello', 'How', 'Are', 'Are', 'You'];

function getWordCount(array) {
  let wordObject = {};
  for (let i = 0; i < array.length; i++) {
    const word = array[i].toLowerCase();
    if (wordObject[word]) {
      wordObject[word]++
    } else {
      wordObject[word] = 1;
    }
  }
  return wordObject;
}

console.log(getWordCount(array));
