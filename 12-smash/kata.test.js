import smash from "./kata";

describe("smash", () => {
  it("it smashes the word together", () => {
    expect(smash(["Giovani", "Carlin"])).toBe("Giovani Carlin");
  });
});
