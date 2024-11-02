import { assert, it } from "vitest";
import {
    mapEntries,
    mapFromObj,
    mapFromObjArr,
    mapKeys,
    mapMapEntries,
    mapMapKeys,
    mapMapValues,
    mapValues,
} from "./map.js";

it("mapFromObj", () => {
    assert.deepStrictEqual(mapFromObj({}), new Map([]));
    assert.deepStrictEqual(
        mapFromObj({
            Paul: "Bass",
            John: "Guitar",
            George: "Guitar",
            Ringo: "Drums",
        }),
        new Map(
            [
                ["Paul", "Bass"],
                ["John", "Guitar"],
                ["George", "Guitar"],
                ["Ringo", "Drums"],
            ] as const,
        ),
    );
});

it("mapFromObjArr", () => {
    assert.deepStrictEqual(mapFromObjArr([], "id"), new Map());
    assert.deepStrictEqual(
        mapFromObjArr(
            [
                { name: "Alex Lifeson", instrument: "Guitar" },
                { name: "Geddy Lee", instrument: "Bass" },
                { name: "Neil Peart", instrument: "Drums" },
            ],
            "instrument",
        ),
        new Map([
            ["Guitar", { name: "Alex Lifeson", instrument: "Guitar" }],
            ["Bass", { name: "Geddy Lee", instrument: "Bass" }],
            ["Drums", { name: "Neil Peart", instrument: "Drums" }],
        ]),
    );
});

it("mapEntries", () => {
    assert.deepStrictEqual(mapEntries(new Map()), []);
    assert.deepStrictEqual(
        mapEntries(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [
            [1, { name: "Paul McCartney" }],
            [2, { name: "George Harrison" }],
        ],
    );
});

it("mapKeys", () => {
    assert.deepStrictEqual(mapKeys(new Map()), []);
    assert.deepStrictEqual(
        mapKeys(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [1, 2],
    );
});

it("mapValues", () => {
    assert.deepStrictEqual(mapValues(new Map()), []);
    assert.deepStrictEqual(
        mapValues(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [{ name: "Paul McCartney" }, { name: "George Harrison" }],
    );
});

it("mapMapEntries", () => {
    assert.deepStrictEqual(
        mapMapEntries(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            ([key, value]) => [key, value],
        ),
        new Map<string | number, string | number | boolean>([
            ["a", 1],
            ["b", "two"],
            ["c", true],
            [4, "nada"],
        ]),
    );
    assert.deepStrictEqual(
        mapMapEntries(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            ([key, value]) => [`key_${key}`, `value_${value}`],
        ),
        new Map([
            ["key_a", "value_1"],
            ["key_b", "value_two"],
            ["key_c", "value_true"],
            ["key_4", "value_nada"],
        ]),
    );
    assert.deepStrictEqual(
        mapMapEntries(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            () => ["key", "value"],
        ),
        new Map([["key", "value"]]),
    );
});

it("mapMapKeys", () => {
    assert.deepStrictEqual(
        mapMapKeys(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (key) => key,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", 1],
            ["b", "two"],
            ["c", true],
            [4, "nada"],
        ]),
    );
    assert.deepStrictEqual(
        mapMapKeys(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (key) => `v2_${key}_test`,
        ),
        new Map<string | number, string | number | boolean>([
            ["v2_a_test", 1],
            ["v2_b_test", "two"],
            ["v2_c_test", true],
            ["v2_4_test", "nada"],
        ]),
    );
    assert.deepStrictEqual(
        mapMapKeys(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            () => "key",
        ),
        new Map([["key", "nada"]]),
    );
});

it("mapMapValues", () => {
    assert.deepStrictEqual(
        mapMapValues(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (value) => value,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", 1],
            ["b", "two"],
            ["c", true],
            [4, "nada"],
        ]),
    );
    assert.deepStrictEqual(
        mapMapValues(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (value) => value === true,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", false],
            ["b", false],
            ["c", true],
            [4, false],
        ]),
    );
    assert.deepStrictEqual(
        mapMapValues(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (value) => `v2_${value}_test`,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", "v2_1_test"],
            ["b", "v2_two_test"],
            ["c", "v2_true_test"],
            [4, "v2_nada_test"],
        ]),
    );
});
