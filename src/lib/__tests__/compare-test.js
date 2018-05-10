import compare from "../compare";

describe("arrayShallow()", () => {
  it("returns true with two matching pairs of shallow, integer arrays", () => {
    expect(compare.arrayShallow([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("returns false if two separate, identical objects are in the arrays", () => {
    expect(compare.arrayShallow([{}], [{}])).toBe(false);
  });
});

describe("objectShallow()", () => {
  it("returns true for two identical objects with string => integer mappings", () => {
    expect(compare.objectShallow({"k": 1}, {"k": 1})).toBe(true);
  });

  it("returns false if one object has extra key/value pairs", () => {
    expect(compare.objectShallow({}, {"k": 1})).toBe(false);
  });
});
