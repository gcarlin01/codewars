import duplicateEncode from "./kata";

describe("sample", () => {
  it("prints ) when a letter is repeated and ( if not", () => {
    expect(duplicateEncode("aab")).toBe("))(");
    expect(duplicateEncode("(( @")).toBe("))((");
  });
});
