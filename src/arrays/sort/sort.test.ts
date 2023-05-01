import { expect, it } from "vitest";
import { sort } from "./sort.js";

it("sort", () => {
    const original = [9, 1, true, "olá mundo"];
    const sorted = sort(original);

    expect(original).toEqual([9, 1, true, "olá mundo"]);
    expect(sorted).toEqual([1, 9, "olá mundo", true]);
});

it("sort", () => {
    expect(
        sort([1, 9, 2, 8, 3, 7, 4, 6, 5], (a, b) => a - b),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(
        sort([1, 9, 2, 8, 3, 7, 4, 6, 5], (a, b) => b - a),
    ).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(
        sort([1, 9, 2, 8, 3, 7, 4, 6, 5], () => 0),
    ).toEqual([1, 9, 2, 8, 3, 7, 4, 6, 5]);
});
