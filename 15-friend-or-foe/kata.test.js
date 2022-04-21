import friend from "./kata";

describe("friend", () => {
  it("returns a list with your friends which have only 4 characters", () => {
    expect(friend(["giancarlo", "luis", "sam", "maye"])).toEqual([
      "luis",
      "maye",
    ]);
  });
});
