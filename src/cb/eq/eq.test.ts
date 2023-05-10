import { expect, it } from "vitest";
import { eq } from "./eq.js";

it("eq", () => {
    expect(eq(1)(0)).toBe(false);
    expect(eq(1)(1)).toBe(true);
    expect(eq(1)(2)).toBe(false);
});
