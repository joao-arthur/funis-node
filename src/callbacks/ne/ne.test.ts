import { expect, it } from "vitest";
import { ne } from "./ne.js";

it("ne", () => {
    expect(ne(1)(0)).toBe(true);
    expect(ne(1)(1)).toBe(false);
    expect(ne(1)(2)).toBe(true);
});
