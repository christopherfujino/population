import populate from "../populate.js";

describe("populate()", () => {
  it("returns an object", () => {
    expect(populate(10)).toEqual(expect.any(Object));
  });
});
