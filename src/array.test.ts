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

const assertEquals = assert.deepStrictEqual;

it("arrGroup", () => {
    assertEquals(arrGroup([], (item) => item), []);
    assertEquals(arrGroup([1, 2, 3], (item) => item), [[1], [2], [3]]);
    assertEquals(arrGroup([1, 2, 3], (item) => item % 2), [[1, 3], [2]]);
    assertEquals(arrGroup([1, 1, 2, 2, 3, 3], (item) => item), [[1, 1], [2, 2], [3, 3]]);
    assertEquals(
        arrGroup(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        [["George", "Paul", "John"], ["Ringo"]],
    );
    assertEquals(
        arrGroup([false, true, false, true, false, true], Boolean),
        [[false, false, false], [true, true, true]],
    );
    assertEquals(
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
    assertEquals(arrGroupToEntries([], (item) => item), []);
    assertEquals(arrGroupToEntries([1, 2, 3], (item) => item), [[1, [1]], [2, [2]], [3, [3]]]);
    assertEquals(arrGroupToEntries([1, 2, 3], (item) => item % 2), [[1, [1, 3]], [0, [2]]]);
    assertEquals(
        arrGroupToEntries([1, 1, 2, 2, 3, 3], (item) => item),
        [[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]],
    );
    assertEquals(
        arrGroupToEntries(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        [[false, ["George", "Paul", "John"]], [true, ["Ringo"]]],
    );
    assertEquals(
        arrGroupToEntries([false, true, false, true, false, true], Boolean),
        [[false, [false, false, false]], [true, [true, true, true]]],
    );
    assertEquals(
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
    assertEquals(arrGroupToMap([], (item) => item), new Map());
    assertEquals(arrGroupToMap([1, 2, 3], (item) => item), new Map([[1, [1]], [2, [2]], [3, [3]]]));
    assertEquals(arrGroupToMap([1, 2, 3], (item) => item % 2), new Map([[1, [1, 3]], [0, [2]]]));
    assertEquals(
        arrGroupToMap([1, 1, 2, 2, 3, 3], (item) => item),
        new Map([[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]]),
    );
    assertEquals(
        arrGroupToMap(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        new Map([[false, ["George", "Paul", "John"]], [true, ["Ringo"]]]),
    );
    assertEquals(
        arrGroupToMap([false, true, false, true, false, true], Boolean),
        new Map([[false, [false, false, false]], [true, [true, true, true]]]),
    );
    assertEquals(
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
    assertEquals(arrGroupToObj([], (item) => item), {});
    assertEquals(arrGroupToObj([1, 2, 3], (item) => item), { 1: [1], 2: [2], 3: [3] });
    assertEquals(arrGroupToObj([1, 2, 3], (item) => item % 2), { 1: [1, 3], 0: [2] });
    assertEquals(
        arrGroupToObj([1, 1, 2, 2, 3, 3], (item) => item),
        { 1: [1, 1], 2: [2, 2], 3: [3, 3] },
    );
    assertEquals(
        arrGroupToObj(["George", "Paul", "John", "Ringo"], (item) => item === "Ringo"),
        { false: ["George", "Paul", "John"], true: ["Ringo"] },
    );
    assertEquals(
        arrGroupToObj([false, true, false, true, false, true], Boolean),
        { false: [false, false, false], true: [true, true, true] },
    );
    assertEquals(
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
    assertEquals(arrUnique([]), []);
    assertEquals(arrUnique([1]), [1]);
    const symbolValue = Symbol(1);
    assertEquals(
        arrUnique([1, 1, "john", "john", true, false, true, symbolValue, symbolValue]),
        [1, "john", true, false, symbolValue],
    );
});

it("arrDisjoint", () => {
    assertEquals(arrDisjoint([]), []);
    assertEquals(arrDisjoint([[1, 2, 3], [1, 2, 3]]), []);
    assertEquals(arrDisjoint([[1, 2, 3]]), [1, 2, 3]);
    assertEquals(arrDisjoint([[4, 5, 6], [5, 6, 7]]), [4, 7]);
    assertEquals(
        arrDisjoint([["George", "Paul", "John", "Ringo", "George"], ["Ringo"], ["John"]]),
        ["George", "Paul"],
    );
    assertEquals(arrDisjoint([[false, true], []]), [false, true]);
});

it("arrIntersect", () => {
    assertEquals(arrIntersect([[1, 2, 3], [4, 5, 6]]), []);
    assertEquals(arrIntersect([[false, true], []]), []);
    assertEquals(arrIntersect([[""]]), [""]);
    assertEquals(arrIntersect([[1]]), [1]);
    assertEquals(arrIntersect([[4, 5, 6], [5, 6, 7]]), [5, 6]);
    assertEquals(
        arrIntersect([["George", "Paul", "John", "Ringo", "Ringo"], ["Ringo"], ["Ringo", "John"]]),
        ["Ringo"],
    );
});

it("arrCombinate", () => {
    assertEquals(arrCombinate([]), []);
    assertEquals(arrCombinate([10]), []);
    assertEquals(arrCombinate([10, 20]), [[10, 20]]);
    assertEquals(
        arrCombinate([10, 20, 30, 40, 50]),
        [
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
        ],
    );
});

it("arrOnce", () => {
    assertEquals(arrOnce([5, 3, 1], (item) => item < 0), false);
    assertEquals(arrOnce([5, 3, 1], (item) => item > 0), false);
    assertEquals(arrOnce([5, 3, 1], (item) => item > 4), true);
    assertEquals(
        arrOnce(["Axl", "Slash", "Duff", "Buckethead"], (item: unknown) => item === "Roses"),
        false,
    );
    assertEquals(
        arrOnce(["Axl", "Slash", "Duff", "Buckethead"], (item) => item === "Buckethead"),
        true,
    );
    assertEquals(
        arrOnce(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => ["Axl", "Slash", "Duff", "Buckethead"].includes(item),
        ),
        false,
    );
});

it("arrRepeat", () => {
    assertEquals(arrRepeat([0, 1, 2], -1), []);
    assertEquals(arrRepeat([0, 1, 2], 0), []);
    assertEquals(arrRepeat([0, 1, 2], 1), [0, 1, 2]);
    assertEquals(arrRepeat([0, 1, 2], 2), [0, 1, 2, 0, 1, 2]);
});

it("arrRandom", () => {
    assertEquals(arrRandom([]), undefined);
    assertEquals(arrRandom([true]), true);
    assertEquals(arrRandom([5]), 5);
    assertEquals(arrRandom(["Memento mori"]), "Memento mori");
    const result = arrRandom([true, false, 0, 1, "y", "n"]);
    assertEquals([true, false, 0, 1, "y", "n"].includes(result!), true);
});
