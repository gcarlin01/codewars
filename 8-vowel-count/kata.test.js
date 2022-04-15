import getCount from "./kata";

describe("vowelsCount", () => {
  it("returns the number of vowels in a string", () => {
    expect(getCount("abracadabra")).toBe(5);
  });
});
