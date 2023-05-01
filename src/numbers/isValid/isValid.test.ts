import { expect, it } from "vitest";
import { isValid } from "./isValid.js";

it("isValid", () => {
    expect(isValid(1)).toBe(true);
    expect(isValid(-1)).toBe(true);
    expect(isValid(0)).toBe(true);
    expect(isValid(3.1)).toBe(true);
    expect(isValid(-1.82)).toBe(true);
    expect(isValid(+0)).toBe(true);
    expect(isValid(-0)).toBe(true);
    expect(isValid(Number.EPSILON)).toBe(true);
    expect(isValid(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isValid(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(isValid(Number.POSITIVE_INFINITY)).toBe(true);
});

it("isValid", () => {
    expect(isValid(Number.NaN)).toBe(false);
    expect(isValid(undefined)).toBe(false);
    expect(isValid(null)).toBe(false);
});
