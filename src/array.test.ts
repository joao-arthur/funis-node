import { assert, it } from "vitest";
import {
    arrCombinate,
    arrDisjoint,
    arrGroupToArray,
    arrGroupToEntries,
    arrGroupToMap,
    arrGroupToObject,
    arrIntersect,
    arrOnce,
    arrRandom,
    arrRepeat,
    arrUnique,
} from "./array.js";

it("arrCombinate", () => {
    assert.deepStrictEqual(arrCombinate([]), []);
    assert.deepStrictEqual(arrCombinate([10]), []);
});

it("arrCombinate", () => {
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

it("arrDisjoint", () => {
    assert.deepStrictEqual(arrDisjoint([]), []);
    assert.deepStrictEqual(arrDisjoint([[1, 2, 3], [1, 2, 3]]), []);
});

it("arrDisjoint", () => {
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

it("arrGroupToArray", () => {
    assert.deepStrictEqual(arrGroupToArray([], (item) => item), []);
});

it("arrGroupToArray", () => {
    assert.deepStrictEqual(arrGroupToArray([1, 2, 3], (item) => item), [[1], [2], [3]]);
    assert.deepStrictEqual(arrGroupToArray([1, 2, 3], (item) => item % 2), [[1, 3], [2]]);
    assert.deepStrictEqual(
        arrGroupToArray([1, 1, 2, 2, 3, 3], (item) => item),
        [[1, 1], [2, 2], [3, 3]],
    );
    assert.deepStrictEqual(
        arrGroupToArray(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        [["George", "Paul", "John"], ["Ringo"]],
    );
    assert.deepStrictEqual(
        arrGroupToArray([false, true, false, true, false, true], Boolean),
        [[false, false, false], [true, true, true]],
    );
    assert.deepStrictEqual(
        arrGroupToArray(
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
});

it("arrGroupToEntries", () => {
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
});

it("arrGroupToMap", () => {
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

it("arrGroupToObject", () => {
    assert.deepStrictEqual(arrGroupToObject([], (item) => item), {});
});

it("arrGroupToObject", () => {
    assert.deepStrictEqual(arrGroupToObject([1, 2, 3], (item) => item), { 1: [1], 2: [2], 3: [3] });
    assert.deepStrictEqual(arrGroupToObject([1, 2, 3], (item) => item % 2), { 1: [1, 3], 0: [2] });
    assert.deepStrictEqual(
        arrGroupToObject([1, 1, 2, 2, 3, 3], (item) => item),
        { 1: [1, 1], 2: [2, 2], 3: [3, 3] },
    );
    assert.deepStrictEqual(
        arrGroupToObject(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        { false: ["George", "Paul", "John"], true: ["Ringo"] },
    );
    assert.deepStrictEqual(
        arrGroupToObject([false, true, false, true, false, true], Boolean),
        { false: [false, false, false], true: [true, true, true] },
    );
    assert.deepStrictEqual(
        arrGroupToObject(
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

it("arrIntersect", () => {
    assert.deepStrictEqual(arrIntersect([[1, 2, 3], [4, 5, 6]]), []);
    assert.deepStrictEqual(arrIntersect([[false, true], []]), []);
});

it("arrIntersect", () => {
    assert.deepStrictEqual(arrIntersect([[""]]), [""]);
    assert.deepStrictEqual(arrIntersect([[1]]), [1]);
});

it("arrIntersect", () => {
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

it("arrOnce", () => {
    assert.deepStrictEqual(
        arrOnce(["Axl", "Slash", "Duff", "Buckethead"], (item: any) => item === "Roses"),
        false,
    );
    assert.deepStrictEqual(arrOnce([5, 3, 1], (item) => item < 0), false);
});

it("arrOnce", () => {
    assert.deepStrictEqual(
        arrOnce(["Axl", "Slash", "Duff", "Buckethead"], (item) => item === "Buckethead"),
        true,
    );
    assert.deepStrictEqual(arrOnce([5, 3, 1], (item) => item > 4), true);
});

it("arrOnce", () => {
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

it("arrRandom", () => {
    assert.deepStrictEqual(arrRandom([]), undefined);
});

it("arrRandom", () => {
    assert.deepStrictEqual(arrRandom([true]), true);
    assert.deepStrictEqual(arrRandom([5]), 5);
    assert.deepStrictEqual(arrRandom(["Memento mori"]), "Memento mori");
});

it("arrRandom", () => {
    const result = arrRandom([true, false, 0, 1, "y", "n"]);
    assert.deepStrictEqual([true, false, 0, 1, "y", "n"].includes(result!), true);
});

const items = [0, 1, 2];

it("arrRepeat", () => {
    assert.deepStrictEqual(arrRepeat(items, -1), []);
    assert.deepStrictEqual(arrRepeat(items, 0), []);
    assert.deepStrictEqual(arrRepeat(items, 1), [0, 1, 2]);
    assert.deepStrictEqual(arrRepeat(items, 2), [0, 1, 2, 0, 1, 2]);
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
