import duplicateCount, { getLetterCount } from "./kata";

describe("kata", () => {
  describe("duplicateCount", () => {
    it("returns quantity of duplicates in string", () => {
      expect(duplicateCount("aaabbcde")).toBe(2);
      expect(duplicateCount("abcde")).toBe(0);
      expect(duplicateCount("indivisibility")).toBe(1);
    });
  });

  describe("getLetterCount", () => {
    it("returns the number of instances of a letter", () => {
      expect(getLetterCount("aab")).toEqual({ a: 2, b: 1 });
    });
  });
});
