import { expect, it } from "vitest";
import { last } from "./last.js";

it("last", () => {
    expect(last(new Map())).toBe(undefined);
});

it("last", () => {
    expect(last(
        new Map([
            [1, { name: "Paul McCartney" }],
            [2, { name: "John Lennon" }],
        ]),
    )).toEqual([2, { name: "John Lennon" }]);
    expect(last(
        new Map([
            ["RF", { birthday: "1834-10-01T11:18:35.000Z" }],
            ["FJW", { birthday: "2022-11-13T22:55:55.036Z" }],
        ]),
    )).toEqual(["FJW", { birthday: "2022-11-13T22:55:55.036Z" }]);
});
