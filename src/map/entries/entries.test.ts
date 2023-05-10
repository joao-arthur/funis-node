import { expect, it } from "vitest";
import { entries } from "./entries.js";

it("entries", () => {
    expect(entries(new Map())).toEqual([]);
});

it("entries", () => {
    expect(entries(
        new Map([
            [1, { name: "Paul McCartney" }],
            [2, { name: "George Harrison" }],
        ]),
    )).toEqual([
        [1, { name: "Paul McCartney" }],
        [2, { name: "George Harrison" }],
    ]);
});
