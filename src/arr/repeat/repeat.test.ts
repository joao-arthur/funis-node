import { expect, it } from "vitest";
import { repeat } from "./repeat.js";

const items = [0, 1, 2];

it("repeat", () => {
    expect(repeat(items, -1)).toEqual([]);
    expect(repeat(items, 0)).toEqual([]);
    expect(repeat(items, 1)).toEqual([0, 1, 2]);
    expect(repeat(items, 2)).toEqual([0, 1, 2, 0, 1, 2]);
});
