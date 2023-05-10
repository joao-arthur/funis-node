import { expect, it } from "vitest";
import { le } from "./le.js";

it("le", () => {
    expect(le(1)(0)).toBe(true);
    expect(le(1)(1)).toBe(true);
    expect(le(1)(2)).toBe(false);
});
