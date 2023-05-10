import { expect, it } from "vitest";
import { groupToEntries } from "./groupToEntries.js";

it("groupToEntries", () => {
    expect(groupToEntries([], (item) => item)).toEqual([]);
});

it("groupToEntries", () => {
    expect(
        groupToEntries([1, 2, 3], (item) => item),
    ).toEqual(
        [[1, [1]], [2, [2]], [3, [3]]],
    );
    expect(
        groupToEntries([1, 2, 3], (item) => item % 2),
    ).toEqual(
        [[1, [1, 3]], [0, [2]]],
    );
    expect(
        groupToEntries([1, 1, 2, 2, 3, 3], (item) => item),
    ).toEqual(
        [[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]],
    );
    expect(
        groupToEntries(
            ["George", "Paul", "John", "Ringo"],
            (item) => item === "Ringo",
        ),
    ).toEqual(
        [[false, ["George", "Paul", "John"]], [true, ["Ringo"]]],
    );
    expect(
        groupToEntries(
            [false, true, false, true, false, true],
            Boolean,
        ),
    ).toEqual(
        [
            [false, [false, false, false]],
            [true, [true, true, true]],
        ],
    );
    expect(
        groupToEntries(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
    ).toEqual([
        ["grass", [{ type: "grass", name: "bulbasaur" }]],
        ["fire", [{ type: "fire", name: "charmander" }]],
        ["water", [
            { type: "water", name: "squirtle" },
            { type: "water", name: "psyduck" },
        ]],
        ["bug", [{ type: "bug", name: "caterpie" }]],
    ]);
});
