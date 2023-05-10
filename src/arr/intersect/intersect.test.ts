import { expect, it } from "vitest";
import { intersect } from "./intersect.js";

it("intersect", () => {
    expect(intersect([[1, 2, 3], [4, 5, 6]])).toEqual([]);
    expect(intersect([[false, true], []])).toEqual([]);
});

it("intersect", () => {
    expect(intersect([[""]])).toEqual([""]);
    expect(intersect([[1]])).toEqual([1]);
});

it("intersect", () => {
    expect(intersect([[4, 5, 6], [5, 6, 7]])).toEqual([5, 6]);
    expect(intersect([
        ["George", "Paul", "John", "Ringo", "Ringo"],
        ["Ringo"],
        ["Ringo", "John"],
    ])).toEqual(["Ringo"]);
});
