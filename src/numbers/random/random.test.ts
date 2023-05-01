import { expect, it } from "vitest";
import { random } from "./random.js";

it("random", () => {
    expect(random(0, 0)).toBe(0);
    expect(random(5, 5)).toBe(5);
    expect(random(10, 10)).toBe(10);
});

it("random", () => {
    for (let i = 0; i < 10; i++) {
        expect(random(10, -10)).toBeLessThanOrEqual(10);
        expect(random(10, -10)).toBeGreaterThanOrEqual(-10);
    }
});
