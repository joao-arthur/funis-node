import { expect, it } from "vitest";
import { gt } from "./gt.js";

it("gt", () => {
    expect(gt(1)(0)).toBe(false);
    expect(gt(1)(1)).toBe(false);
    expect(gt(1)(2)).toBe(true);
});
