import { expect, it } from "vitest";
import { range } from "./range.js";

it("range", () => {
    expect(range(-1, 2)).toEqual([-1, 0, 1, 2]);
    expect(
        range(0, 10.3),
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(4, 5.1)).toEqual([4, 5]);
});

it("range", () => {
    expect(range(2, -1)).toEqual([]);
    expect(range(-1, 2, -1)).toEqual([]);
    expect(range(10.2, 0)).toEqual([]);
    expect(range(0, 10.2, -1)).toEqual([]);
    expect(range(5, 4.2)).toEqual([]);
    expect(range(4.2, 5, -1)).toEqual([]);
});

it("range", () => {
    expect(
        range(2, 5.3, 0.5),
    ).toEqual([2, 2.5, 3, 3.5, 4, 4.5, 5]);
    expect(
        range(-3.5, -2.5, 0.2),
    ).toEqual([-3.5, -3.3, -3.1, -2.9, -2.7, -2.5]);
});

it("range", () => {
    expect(range(2, -1, -1)).toEqual([2, 1, 0, -1]);
    expect(
        range(10.2, 9, -0.2),
    ).toEqual([10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]);
    expect(range(5, 4.2, -1)).toEqual([5]);
});
