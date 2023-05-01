import { describe, expect, it } from "vitest";
import { isValid } from "./isValid.js";

describe("isValid", () => {
    it("should return true for valid number", () => {
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

    it("should return false for invalid number", () => {
        expect(isValid(Number.NaN)).toBe(false);
        expect(isValid(undefined)).toBe(false);
        expect(isValid(null)).toBe(false);
    });
});
