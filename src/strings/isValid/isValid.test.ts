import { describe, expect, it } from "vitest";
import { isValid } from "./isValid.js";

describe("isValid", () => {
    it("should return true for valid string", () => {
        expect(isValid("")).toBe(true);
        expect(isValid(" ")).toBe(true);
        expect(isValid("Lorem ipsum")).toBe(true);
    });

    it("should return false for invalid string", () => {
        expect(isValid(undefined)).toBe(false);
        expect(isValid(null)).toBe(false);
    });
});
