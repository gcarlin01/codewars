import stringToNumber from "./kata";

describe("stringToNumber", () => {
  it("transforms a string into a number", () => {
    expect(stringToNumber(["2980"])).toBe(2980);
    expect(stringToNumber(["10101010"])).toBe(10101010);
  });
});
