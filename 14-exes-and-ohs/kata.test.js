import XO from "./kata";

describe("XO", () => {
  it("returns true when same number of xs and os and they are lowercase", () => {
    expect(XO("xxjjoo")).toBe(true);
  });

  it("returns true when same number of xs and os and they are uppercase", () => {
    expect(XO("XxxxjjoOOO")).toBe(true);
  });

  it("returns true when no xs or os are found", () => {
    expect(XO("iuyhuin")).toBe(true);
  });

  it("returns false when the number of xs and os are different, lowercase or uppercase", () => {
    expect(XO("XxxXuyhyOO")).toBe(false);
  });
});
