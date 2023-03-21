import { parse } from "./parser";

describe("Parser correct cases", () => {
  it("100 + 44", () => {
    expect(parse("100 + 44")).toEqual([100, "+", 44]);
  });

  it("1 + 3 * 2", () => {
    expect(parse("1 + 3 * 2")).toEqual([1, "+", 3, "*", 2]);
  });

  it("1 + 8 - 2 + 2", () => {
    expect(parse("1 + 8 - 2 + 2")).toEqual([1, "+", 8, "-", 2, "+", 2]);
  });
});

describe("Parser invalid cases", () => {
  it("A B", () => {
    expect(parse("A B")).toEqual([]);
  });

  it("A + B", () => {
    expect(parse("A + B")).toEqual(["+"]);
  });
});
