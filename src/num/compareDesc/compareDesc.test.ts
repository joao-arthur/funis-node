import { expect, it } from "vitest";
import { compareDesc } from "./compareDesc.js";

it("compareDesc", () => {
    expect(
        [1, 9, 2, 8, 3, 7, 4].sort(compareDesc),
    ).toEqual([9, 8, 7, 4, 3, 2, 1]);
});
