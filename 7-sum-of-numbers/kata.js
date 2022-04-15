function getSum(a, b) {
  if (a === b) {
    return a;
  }

  const sorted = [a, b].sort((a, b) => a - b);

  const start = sorted[0];
  const end = sorted[1];

  let sum = 0;

  for (let num = start; num <= end; num++) {
    sum += num;
  }

  return sum;
}

export default getSum;
