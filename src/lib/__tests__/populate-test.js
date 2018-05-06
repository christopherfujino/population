import {
  incrementName,
  lastCharacter,
  populate,
  uniqueify
} from "../populate.js";

describe("lastCharacter()", () => {
  it("Returns last character", () => {
    expect(lastCharacter("Hello, world!")).toEqual("!");
  });
});

describe("incrementName()", () => {
  it("adds \" 1\" to a name without a num at the end", () => {
    const inputName = "Joe Dirt";
    const outputName = incrementName(inputName);
    expect(outputName).toEqual(`${inputName} 1`);
  });

  it("increments num at end, if exists", () => {
    const inputName = "Joe Dirt 1";
    const outputName = incrementName(inputName);
    expect(outputName).toEqual("Joe Dirt 2");
  });
});

describe("uniqueify()", () => {
  it("doesn't change new names", () => {
    const inputName = "Joe Dirt";
    const existing = {};
    const outputName = uniqueify(existing)(inputName);
    expect(outputName).toEqual(inputName);
  });

  it("does change an existing name", () => {
    const inputName = "Joe Dirt";
    const existing = {[inputName]: true};
    const outputName = uniqueify(existing)(inputName);
    expect(outputName).not.toEqual(inputName);
  });
});

describe("populate()", () => {
  it("returns an object", () => {
    expect(populate(10)).toEqual(expect.any(Object));
  });

  it("returns an object with 10 entries", () => {
    expect(Object.keys(populate(10)).length).toBe(10);
  });
});
