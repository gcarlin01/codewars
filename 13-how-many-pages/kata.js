function amountOfPages(summary) {
  let digitCount = 0;
  let pageNumber = 0;

  while (digitCount < summary) {
    // move page to page # 2
    pageNumber++;

    // how many digits in number 1
    digitCount += getDigitCountInNumber(pageNumber);
  }

  return pageNumber;
}

function getDigitCountInNumber(theNumber) {
  return `${theNumber}`.length;
}

export default amountOfPages;

export { getDigitCountInNumber };
