function getCount(str) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  return str.split("").filter((letter) => VOWELS.includes(letter)).length;
}

export default getCount;
