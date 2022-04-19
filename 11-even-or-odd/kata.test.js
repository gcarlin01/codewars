import even_or_odd from "./kata";

describe("even_or_odd", () => {
  it("returns Odd when number is odd", () => {
    expect(even_or_odd([123])).toBe("Odd");
  });

  it("returns Even when number is even", () => {
    expect(even_or_odd([14054670])).toBe("Even");
    expect(even_or_odd([0])).toBe("Even");
  });
});
