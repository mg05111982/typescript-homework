import { engineOperators } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("multiply 1 * 2 to equal 2", () => {
    expect(engineOperators['*'](1, 2)).toBe(2);
  });

  it("multiply 2 * 2 to equal 4", () => {
    expect(engineOperators['*'](2, 2)).toBe(4);
  });

  it("division 2 / 2 to equal 1", () => {
    expect(engineOperators['/'](2, 2)).toBe(1);
  });

  it("division 4 / 2 to equal 2", () => {
    expect(engineOperators['/'](4, 2)).toBe(2);
  });

  it("addition 4 + 2 to equal 6", () => {
    expect(engineOperators['+'](4, 2)).toBe(6);
  });

  it("substraction 4 - 2 to equal 2", () => {
    expect(engineOperators['-'](4, 2)).toBe(2);
  });
});
