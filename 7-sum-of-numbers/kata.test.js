import getSum from "./kata";

describe("getSum", () => {
  it("returns 1 when passing 1 and 1 as inputs", () => {
    expect(getSum(1, 1)).toBe(1);
  });

  it("returns the sum in between the numbers a and b", () => {
    expect(getSum(0, -1)).toBe(-1);
    expect(getSum(1, 0)).toBe(1);
    expect(getSum(1, 2)).toBe(3);
  });
});
