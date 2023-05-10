import { expect, it } from "vitest";
import { ge } from "./ge.js";

it("ge", () => {
    expect(ge(1)(0)).toBe(false);
    expect(ge(1)(1)).toBe(true);
    expect(ge(1)(2)).toBe(true);
});
