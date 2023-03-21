import { engine } from "./engine";

describe("engine simple cases", () => {
  it("[1, *, 32]", () => {
    expect(engine([1, "*", 32])).toEqual(32);
  });

  it("[32, /, 32]", () => {
    expect(engine([32, "/", 32])).toEqual(1);
  });

  it("[32, +, 32]", () => {
    expect(engine([32, "+", 32])).toEqual(64);
  });
});

describe("engine mixed with second priorities cases", () => {
  it("[31 / 31 + 10 * 10]", () => {
    expect(engine([32, "/", 32, "+", 10, "*", 10])).toEqual(101);
  });
});