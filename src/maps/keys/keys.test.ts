import { expect, it } from "vitest";
import { keys } from "./keys.js";

it("keys", () => {
    expect(keys(new Map())).toEqual([]);
});

it("keys", () => {
    expect(keys(
        new Map([
            [1, { name: "Paul McCartney" }],
            [2, { name: "George Harrison" }],
        ]),
    )).toEqual([1, 2]);
});
