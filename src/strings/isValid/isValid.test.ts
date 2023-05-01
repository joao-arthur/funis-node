import { expect, it } from "vitest";
import { isValid } from "./isValid.js";

it("isValid", () => {
    expect(isValid("")).toBe(true);
    expect(isValid(" ")).toBe(true);
    expect(isValid("Lorem ipsum")).toBe(true);
});

it("isValid", () => {
    expect(isValid(undefined)).toBe(false);
    expect(isValid(null)).toBe(false);
});
