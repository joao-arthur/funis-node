import { expect, it } from "vitest";
import { combinations } from "../combinations/combinations.js";

it("combinations", () => {
    expect(combinations([])).toEqual([]);
    expect(combinations([10])).toEqual([]);
});

it("combinations", () => {
    expect(combinations([10, 20])).toEqual([[10, 20]]);
    expect(combinations([10, 20, 30, 40, 50])).toEqual([
        [10, 20],
        [10, 30],
        [10, 40],
        [10, 50],
        [20, 30],
        [20, 40],
        [20, 50],
        [30, 40],
        [30, 50],
        [40, 50],
    ]);
});
