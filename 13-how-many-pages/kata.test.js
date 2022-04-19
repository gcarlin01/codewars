import amountOfPages, { getDigitCountInNumber } from "./kata";

describe("how many pages", () => {
  describe("amountOfPages", () => {
    it("counts the number of digits below 10", () => {
      expect(amountOfPages(9)).toBe(9);
    });

    it("counts the number of digits below 20", () => {
      expect(amountOfPages(25)).toBe(17);
    });
  });

  describe("getDigitCountInNumber", () => {
    it("returns 1 when there is one digit", () => {
      expect(getDigitCountInNumber(2)).toBe(1);
    });

    it("returns 2 when there is two digits", () => {
      expect(getDigitCountInNumber(21)).toBe(2);
    });

    it("returns 4 when there is four digits", () => {
      expect(getDigitCountInNumber(2199)).toBe(4);
    });
  });
});
