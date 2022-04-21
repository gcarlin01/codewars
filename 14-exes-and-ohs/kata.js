function XO(str) {
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      counterX++;
    }
    if (str[i] === "o" || str[i] === "O") {
      counterO++;
    }
  }

  return counterX === counterO;
}

export default XO;
