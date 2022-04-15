var summation = function (num) {
  if (num[0] === 0) {
    return "unsupported";
  }

  let counter = 0;

  for (let i = 0; i <= num; i++) {
    counter += i;
  }
  return counter;
};

export default summation;
