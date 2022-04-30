function duplicateEncode(word) {
  let encodedString = "";

  const splittedWord = word.split("").map((letter) => letter.toUpperCase());

  for (let letter of splittedWord) {
    const repeatedLetterCount = splittedWord.filter((e) => e === letter).length;

    if (repeatedLetterCount === 1) {
      encodedString += "(";
    } else {
      encodedString += ")";
    }
  }

  return encodedString;
}

export default duplicateEncode;
