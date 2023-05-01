import { describe, expect, it } from "vitest";
import { combinations } from "../combinations/combinations.js";

describe("combinations", () => {
    it("should return empty for arrays with less than two items", () => {
        expect(combinations([])).toEqual([]);
        expect(combinations([10])).toEqual([]);
    });

    it("should return the non repeating combination of the items", () => {
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
});
