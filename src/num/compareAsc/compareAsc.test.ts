import { expect, it } from "vitest";
import { compareAsc } from "./compareAsc.js";

it("compareAsc", () => {
    expect(
        [1, 9, 2, 8, 3, 7, 4].sort(compareAsc),
    ).toEqual([1, 2, 3, 4, 7, 8, 9]);
});
