import { expect, it } from "vitest";
import { disjoint } from "./disjoint.js";

it("disjoint", () => {
    expect(disjoint([])).toEqual([]);
    expect(disjoint([[1, 2, 3], [1, 2, 3]])).toEqual([]);
});

it("disjoint", () => {
    expect(disjoint([[1, 2, 3]])).toEqual([1, 2, 3]);
    expect(disjoint([[4, 5, 6], [5, 6, 7]])).toEqual([4, 7]);
    expect(disjoint([
        ["George", "Paul", "John", "Ringo", "George"],
        ["Ringo"],
        ["John"],
    ])).toEqual(["George", "Paul"]);
    expect(disjoint([[false, true], []])).toEqual([false, true]);
});
