import { describe, expect, it } from "vitest";
import { intersect } from "./intersect.js";

describe("intersect", () => {
    it("should return empty for different arrays", () => {
        expect(intersect([[1, 2, 3], [4, 5, 6]])).toEqual([]);
        expect(intersect([[false, true], []])).toEqual([]);
        expect(intersect([[""]])).toEqual([""]);
    });

    it("should return the items present in all arrays", () => {
        expect(intersect([[1]])).toEqual([1]);
        expect(intersect([[4, 5, 6], [5, 6, 7]])).toEqual([5, 6]);
        expect(intersect([
            ["George", "Paul", "John", "Ringo", "Ringo"],
            ["Ringo"],
            ["Ringo", "John"],
        ])).toEqual(["Ringo"]);
    });
});
