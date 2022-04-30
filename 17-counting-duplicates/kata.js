function duplicateCount(text) {
  const count = getLetterCount(text);

  return Object.values(count).filter((number) => number >= 2).length;
}

function getLetterCount(word) {
  const letterCount = {};

  const splittedWord = word.split("").map((letter) => letter.toLowerCase());

  for (let letter of splittedWord) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  }

  return letterCount;
}

export default duplicateCount;

export { getLetterCount };
