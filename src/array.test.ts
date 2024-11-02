import { assert, it } from "vitest";
import {
    arrCombinate,
    arrDisjoint,
    arrGroup,
    arrGroupToEntries,
    arrGroupToMap,
    arrGroupToObj,
    arrIntersect,
    arrOnce,
    arrRandom,
    arrRepeat,
    arrUnique,
} from "./array.js";

it("arrGroup", () => {
    assert.deepStrictEqual(arrGroup([], (item) => item), []);
    assert.deepStrictEqual(arrGroup([1, 2, 3], (item) => item), [[1], [2], [3]]);
    assert.deepStrictEqual(arrGroup([1, 2, 3], (item) => item % 2), [[1, 3], [2]]);
    assert.deepStrictEqual(
        arrGroup([1, 1, 2, 2, 3, 3], (item) => item),
        [[1, 1], [2, 2], [3, 3]],
    );
    assert.deepStrictEqual(
        arrGroup(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        [["George", "Paul", "John"], ["Ringo"]],
    );
    assert.deepStrictEqual(
        arrGroup([false, true, false, true, false, true], Boolean),
        [[false, false, false], [true, true, true]],
    );
    assert.deepStrictEqual(
        arrGroup(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        [
            [{ type: "grass", name: "bulbasaur" }],
            [{ type: "fire", name: "charmander" }],
            [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ],
            [{ type: "bug", name: "caterpie" }],
        ],
    );
});

it("arrGroupToEntries", () => {
    assert.deepStrictEqual(arrGroupToEntries([], (item) => item), []);
    assert.deepStrictEqual(
        arrGroupToEntries([1, 2, 3], (item) => item),
        [[1, [1]], [2, [2]], [3, [3]]],
    );
    assert.deepStrictEqual(
        arrGroupToEntries([1, 2, 3], (item) => item % 2),
        [[1, [1, 3]], [0, [2]]],
    );
    assert.deepStrictEqual(
        arrGroupToEntries([1, 1, 2, 2, 3, 3], (item) => item),
        [[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]],
    );
    assert.deepStrictEqual(
        arrGroupToEntries(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        [[false, ["George", "Paul", "John"]], [true, ["Ringo"]]],
    );
    assert.deepStrictEqual(
        arrGroupToEntries([false, true, false, true, false, true], Boolean),
        [[false, [false, false, false]], [true, [true, true, true]]],
    );
    assert.deepStrictEqual(
        arrGroupToEntries(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        [
            ["grass", [{ type: "grass", name: "bulbasaur" }]],
            ["fire", [{ type: "fire", name: "charmander" }]],
            ["water", [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ]],
            ["bug", [{ type: "bug", name: "caterpie" }]],
        ],
    );
});

it("arrGroupToMap", () => {
    assert.deepStrictEqual(arrGroupToMap([], (item) => item), new Map());
    assert.deepStrictEqual(
        arrGroupToMap([1, 2, 3], (item) => item),
        new Map([[1, [1]], [2, [2]], [3, [3]]]),
    );
    assert.deepStrictEqual(
        arrGroupToMap([1, 2, 3], (item) => item % 2),
        new Map([[1, [1, 3]], [0, [2]]]),
    );
    assert.deepStrictEqual(
        arrGroupToMap([1, 1, 2, 2, 3, 3], (item) => item),
        new Map([[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]]),
    );
    assert.deepStrictEqual(
        arrGroupToMap(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        new Map([[false, ["George", "Paul", "John"]], [true, ["Ringo"]]]),
    );
    assert.deepStrictEqual(
        arrGroupToMap([false, true, false, true, false, true], Boolean),
        new Map([[false, [false, false, false]], [true, [true, true, true]]]),
    );
    assert.deepStrictEqual(
        arrGroupToMap(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        new Map([
            ["grass", [{ type: "grass", name: "bulbasaur" }]],
            ["fire", [{ type: "fire", name: "charmander" }]],
            ["water", [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ]],
            ["bug", [{ type: "bug", name: "caterpie" }]],
        ]),
    );
});

it("arrGroupToObj", () => {
    assert.deepStrictEqual(arrGroupToObj([], (item) => item), {});
    assert.deepStrictEqual(arrGroupToObj([1, 2, 3], (item) => item), { 1: [1], 2: [2], 3: [3] });
    assert.deepStrictEqual(arrGroupToObj([1, 2, 3], (item) => item % 2), { 1: [1, 3], 0: [2] });
    assert.deepStrictEqual(
        arrGroupToObj([1, 1, 2, 2, 3, 3], (item) => item),
        { 1: [1, 1], 2: [2, 2], 3: [3, 3] },
    );
    assert.deepStrictEqual(
        arrGroupToObj(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        { false: ["George", "Paul", "John"], true: ["Ringo"] },
    );
    assert.deepStrictEqual(
        arrGroupToObj([false, true, false, true, false, true], Boolean),
        { false: [false, false, false], true: [true, true, true] },
    );
    assert.deepStrictEqual(
        arrGroupToObj(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        {
            grass: [{ type: "grass", name: "bulbasaur" }],
            fire: [{ type: "fire", name: "charmander" }],
            water: [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ],
            bug: [{ type: "bug", name: "caterpie" }],
        },
    );
});

it("arrUnique", () => {
    assert.deepStrictEqual(arrUnique([1]), [1]);
    assert.deepStrictEqual(arrUnique([]), []);
    const symbolValue = Symbol(1);
    assert.deepStrictEqual(
        arrUnique([
            1,
            1,
            "john",
            "john",
            true,
            false,
            true,
            symbolValue,
            symbolValue,
        ]),
        [1, "john", true, false, symbolValue],
    );
});

it("arrDisjoint", () => {
    assert.deepStrictEqual(arrDisjoint([]), []);
    assert.deepStrictEqual(arrDisjoint([[1, 2, 3], [1, 2, 3]]), []);
    assert.deepStrictEqual(arrDisjoint([[1, 2, 3]]), [1, 2, 3]);
    assert.deepStrictEqual(arrDisjoint([[4, 5, 6], [5, 6, 7]]), [4, 7]);
    assert.deepStrictEqual(
        arrDisjoint([
            ["George", "Paul", "John", "Ringo", "George"],
            ["Ringo"],
            ["John"],
        ]),
        ["George", "Paul"],
    );
    assert.deepStrictEqual(arrDisjoint([[false, true], []]), [false, true]);
});

it("arrIntersect", () => {
    assert.deepStrictEqual(arrIntersect([[1, 2, 3], [4, 5, 6]]), []);
    assert.deepStrictEqual(arrIntersect([[false, true], []]), []);
    assert.deepStrictEqual(arrIntersect([[""]]), [""]);
    assert.deepStrictEqual(arrIntersect([[1]]), [1]);
    assert.deepStrictEqual(arrIntersect([[4, 5, 6], [5, 6, 7]]), [5, 6]);
    assert.deepStrictEqual(
        arrIntersect([
            ["George", "Paul", "John", "Ringo", "Ringo"],
            ["Ringo"],
            ["Ringo", "John"],
        ]),
        ["Ringo"],
    );
});

it("arrCombinate", () => {
    assert.deepStrictEqual(arrCombinate([]), []);
    assert.deepStrictEqual(arrCombinate([10]), []);
    assert.deepStrictEqual(arrCombinate([10, 20]), [[10, 20]]);
    assert.deepStrictEqual(arrCombinate([10, 20, 30, 40, 50]), [
        [10, 20],
        [10, 30],
        [10, 40],
        [10, 50],
        [20, 30],
        [20, 40],
        [20, 50],
        [30, 40],
        [30, 50],
        [40, 50],
    ]);
});

it("arrOnce", () => {
    assert.deepStrictEqual(
        arrOnce(["Axl", "Slash", "Duff", "Buckethead"], (item: any) => item === "Roses"),
        false,
    );
    assert.deepStrictEqual(arrOnce([5, 3, 1], (item) => item < 0), false);
    assert.deepStrictEqual(
        arrOnce(["Axl", "Slash", "Duff", "Buckethead"], (item) => item === "Buckethead"),
        true,
    );
    assert.deepStrictEqual(arrOnce([5, 3, 1], (item) => item > 4), true);
    assert.deepStrictEqual(
        arrOnce(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) =>
                [
                    "Axl",
                    "Slash",
                    "Duff",
                    "Buckethead",
                ].includes(item),
        ),
        false,
    );
    assert.deepStrictEqual(arrOnce([5, 3, 1], (item) => item > 0), false);
});

it("arrRepeat", () => {
    const items = [0, 1, 2];
    assert.deepStrictEqual(arrRepeat(items, -1), []);
    assert.deepStrictEqual(arrRepeat(items, 0), []);
    assert.deepStrictEqual(arrRepeat(items, 1), [0, 1, 2]);
    assert.deepStrictEqual(arrRepeat(items, 2), [0, 1, 2, 0, 1, 2]);
});

it("arrRandom", () => {
    assert.deepStrictEqual(arrRandom([]), undefined);
    assert.deepStrictEqual(arrRandom([true]), true);
    assert.deepStrictEqual(arrRandom([5]), 5);
    assert.deepStrictEqual(arrRandom(["Memento mori"]), "Memento mori");
    const result = arrRandom([true, false, 0, 1, "y", "n"]);
    assert.deepStrictEqual([true, false, 0, 1, "y", "n"].includes(result!), true);
});
