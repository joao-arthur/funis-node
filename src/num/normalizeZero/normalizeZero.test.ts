import { expect, it } from "vitest";
import { normalizeZero } from "./normalizeZero.js";

it("normalizeZero", () => {
    expect(normalizeZero(-0)).toBe(0);
    expect(normalizeZero(0)).toBe(0);
    expect(normalizeZero(10)).toBe(10);
    expect(normalizeZero(-10)).toBe(-10);
});
