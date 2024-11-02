import { assert, it } from "vitest";
import {
    numClamp,
    numCompAsc,
    numCompDesc,
    numIsValid,
    numLazyRange,
    numNormalizeZero,
    numParse,
    numRandom,
    numRange,
    numToFixed,
} from "./number.js";

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(10, { min: 8, max: 12 }), 10);
    assert.deepStrictEqual(numClamp(10, { min: 0, max: 9 }), 9);
    assert.deepStrictEqual(numClamp(10, { min: 20, max: 100 }), 20);
    assert.deepStrictEqual(numClamp(10, { min: -100, max: -1 }), -1);
});

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(-1, { min: -1, max: -1 }), -1);
    assert.deepStrictEqual(numClamp(10, { min: 10, max: 10 }), 10);
});

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(5, { min: -1, max: 5 }), 5);
    assert.deepStrictEqual(numClamp(12, { min: 8, max: 12 }), 12);
});

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(-1, { min: -1, max: 5 }), -1);
    assert.deepStrictEqual(numClamp(8, { min: 8, max: 12 }), 8);
});

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(-1, { min: -1, max: 5 }), -1);
    assert.deepStrictEqual(numClamp(8, { min: 8, max: 12 }), 8);
});

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(77, { min: 99 }), 99);
    assert.deepStrictEqual(numClamp(10, { min: 8 }), 10);
});

it("numClamp", () => {
    assert.deepStrictEqual(numClamp(-10, { max: 5 }), -10);
    assert.deepStrictEqual(numClamp(846, { max: -1 }), -1);
});

it("numCompAsc", () => {
    assert.deepStrictEqual([1, 9, 2, 8, 3, 7, 4].sort(numCompAsc), [1, 2, 3, 4, 7, 8, 9]);
});

it("numCompareDesc", () => {
    assert.deepStrictEqual([1, 9, 2, 8, 3, 7, 4].sort(numCompDesc), [9, 8, 7, 4, 3, 2, 1]);
});

it("numIsValid", () => {
    assert.deepStrictEqual(numIsValid(Number.NaN), false);
    assert.deepStrictEqual(numIsValid(undefined), false);
    assert.deepStrictEqual(numIsValid(null), false);
});

it("numIsValid", () => {
    assert.deepStrictEqual(numIsValid(1), true);
    assert.deepStrictEqual(numIsValid(-1), true);
    assert.deepStrictEqual(numIsValid(0), true);
    assert.deepStrictEqual(numIsValid(3.1), true);
    assert.deepStrictEqual(numIsValid(-1.82), true);
    assert.deepStrictEqual(numIsValid(+0), true);
    assert.deepStrictEqual(numIsValid(-0), true);
    assert.deepStrictEqual(numIsValid(Number.EPSILON), true);
    assert.deepStrictEqual(numIsValid(Number.MAX_SAFE_INTEGER), true);
    assert.deepStrictEqual(numIsValid(Number.NEGATIVE_INFINITY), true);
    assert.deepStrictEqual(numIsValid(Number.POSITIVE_INFINITY), true);
});

it("numLazyRange", () => {
    const itter = numLazyRange(-1, 2);
    assert.deepStrictEqual(itter.next(), { done: false, value: -1 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 0 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 1 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 2 });
    assert.deepStrictEqual(itter.next(), { done: true, value: undefined });
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, 5.3, 0.5);
    assert.deepStrictEqual(itter.next(), { done: false, value: 2 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 2.5 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 3 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 3.5 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 4 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 4.5 });
    assert.deepStrictEqual(itter.next(), { done: false, value: 5 });
    assert.deepStrictEqual(itter.next(), { done: true, value: undefined });
});

it("numLazyRange", () => {
    const itter = numLazyRange(-1, 2);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assert.deepStrictEqual(values, [-1, 0, 1, 2]);
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, -1);
    assert.deepStrictEqual(itter.next(), { done: true, value: undefined });
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, -1);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assert.deepStrictEqual(values, []);
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, 5.3, 0.5);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assert.deepStrictEqual(values, [2, 2.5, 3, 3.5, 4, 4.5, 5]);
});

it("numNormalizeZero", () => {
    assert.deepStrictEqual(numNormalizeZero(-0), 0);
    assert.deepStrictEqual(numNormalizeZero(0), 0);
    assert.deepStrictEqual(numNormalizeZero(10), 10);
    assert.deepStrictEqual(numNormalizeZero(-10), -10);
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("US$4", { prefix: "R$" }), undefined);
    assert.deepStrictEqual(numParse("R$-6", { prefix: "rem" }), undefined);
    assert.deepStrictEqual(numParse("@-1", { prefix: "km/h" }), undefined);
    assert.deepStrictEqual(numParse("4px", { suffix: "rem" }), undefined);
    assert.deepStrictEqual(numParse("-6em", { suffix: "rem" }), undefined);
    assert.deepStrictEqual(numParse("-1m/s", { suffix: "km/h" }), undefined);
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("$100.00", { prefix: "$" }), 100.00);
    assert.deepStrictEqual(numParse("US$0", { prefix: "US$" }), 0);
    assert.deepStrictEqual(numParse("R$-1.53", { prefix: "R$" }), -1.53);
    assert.deepStrictEqual(numParse("^1.4", { prefix: "^" }), 1.4);
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("100px", { suffix: "px" }), 100);
    assert.deepStrictEqual(numParse("0px", { suffix: "px" }), 0);
    assert.deepStrictEqual(numParse("-1.53m/s", { suffix: "m/s" }), -1.53);
    assert.deepStrictEqual(numParse("1.4kº", { suffix: "kº" }), 1.4);
    assert.deepStrictEqual(numParse("74%", { suffix: "%" }), 74);
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("width: 100px", { prefix: "width: ", suffix: "px" }), 100);
    assert.deepStrictEqual(
        numParse("speed: -1.53m/s", { prefix: "speed: ", suffix: "m/s" }),
        -1.53,
    );
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("US$4 donnut", { prefix: "R$", suffix: "apple" }), undefined);
    assert.deepStrictEqual(numParse("US$4 donnut", { prefix: "US$", suffix: "apple" }), undefined);
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("speed: -4px", { prefix: "speed: " }), undefined);
    assert.deepStrictEqual(numParse("speed: -4px", { suffix: "px" }), undefined);
    assert.deepStrictEqual(numParse(":2em", { prefix: ":" }), undefined);
    assert.deepStrictEqual(numParse(":2em", { suffix: "em" }), undefined);
});

it("numParse", () => {
    assert.deepStrictEqual(numParse("I see", { prefix: "I see" }), undefined);
    assert.deepStrictEqual(numParse("penguins", { suffix: "penguins" }), undefined);
    assert.deepStrictEqual(
        numParse("I see penguins", { prefix: "I see ", suffix: "penguins" }),
        undefined,
    );
});

it("numRandom", () => {
    assert.deepStrictEqual(numRandom(0, 0), 0);
    assert.deepStrictEqual(numRandom(5, 5), 5);
    assert.deepStrictEqual(numRandom(10, 10), 10);
});

it("numRandom", () => {
    for (let i = 0; i < 100; i++) {
        assert.deepStrictEqual(numRandom(10, -10) <= 10, true);
        assert.deepStrictEqual(numRandom(10, -10) >= -10, true);
    }
});

it("numRange", () => {
    assert.deepStrictEqual(numRange(-1, 2), [-1, 0, 1, 2]);
    assert.deepStrictEqual(numRange(0, 10.3), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepStrictEqual(numRange(4, 5.1), [4, 5]);
});

it("numRange", () => {
    assert.deepStrictEqual(numRange(2, -1), []);
    assert.deepStrictEqual(numRange(-1, 2, -1), []);
    assert.deepStrictEqual(numRange(10.2, 0), []);
    assert.deepStrictEqual(numRange(0, 10.2, -1), []);
    assert.deepStrictEqual(numRange(5, 4.2), []);
    assert.deepStrictEqual(numRange(4.2, 5, -1), []);
});

it("numRange", () => {
    assert.deepStrictEqual(numRange(2, 5.3, 0.5), [2, 2.5, 3, 3.5, 4, 4.5, 5]);
    assert.deepStrictEqual(numRange(-3.5, -2.5, 0.2), [-3.5, -3.3, -3.1, -2.9, -2.7, -2.5]);
});

it("numRange", () => {
    assert.deepStrictEqual(numRange(2, -1, -1), [2, 1, 0, -1]);
    assert.deepStrictEqual(numRange(10.2, 9, -0.2), [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]);
    assert.deepStrictEqual(numRange(5, 4.2, -1), [5]);
});

it("numToFixed", () => {
    assert.deepStrictEqual(numToFixed(0, 0), 0);
    assert.deepStrictEqual(numToFixed(3, 0), 3);
    assert.deepStrictEqual(numToFixed(0.2, 0), 0);
    assert.deepStrictEqual(numToFixed(0.4, 0), 0);
    assert.deepStrictEqual(numToFixed(1.1, 0), 1);
    assert.deepStrictEqual(numToFixed(9.9999, 0), 10);
    assert.deepStrictEqual(numToFixed(10.10101, 0), 10);
});

it("numToFixed", () => {
    assert.deepStrictEqual(numToFixed(0, 1), 0);
    assert.deepStrictEqual(numToFixed(3, 1), 3);
    assert.deepStrictEqual(numToFixed(0.2, 1), 0.2);
    assert.deepStrictEqual(numToFixed(0.4, 1), 0.4);
    assert.deepStrictEqual(numToFixed(1.1, 1), 1.1);
    assert.deepStrictEqual(numToFixed(9.9999, 1), 10);
    assert.deepStrictEqual(numToFixed(10.10101, 1), 10.1);
});

it("numToFixed", () => {
    assert.deepStrictEqual(numToFixed(0, 2), 0);
    assert.deepStrictEqual(numToFixed(3, 2), 3);
    assert.deepStrictEqual(numToFixed(0.2, 2), 0.2);
    assert.deepStrictEqual(numToFixed(0.4, 2), 0.4);
    assert.deepStrictEqual(numToFixed(1.1, 2), 1.1);
    assert.deepStrictEqual(numToFixed(9.9999, 2), 10);
    assert.deepStrictEqual(numToFixed(10.10101, 2), 10.1);
});

it("numToFixed", () => {
    assert.deepStrictEqual(numToFixed(0, 3), 0);
    assert.deepStrictEqual(numToFixed(3, 3), 3);
    assert.deepStrictEqual(numToFixed(0.2, 3), 0.2);
    assert.deepStrictEqual(numToFixed(0.4, 3), 0.4);
    assert.deepStrictEqual(numToFixed(1.1, 3), 1.1);
    assert.deepStrictEqual(numToFixed(9.9999, 3), 10);
    assert.deepStrictEqual(numToFixed(10.10101, 3), 10.101);
});

it("numToFixed", () => {
    assert.deepStrictEqual(numToFixed(0, 4), 0);
    assert.deepStrictEqual(numToFixed(3, 4), 3);
    assert.deepStrictEqual(numToFixed(0.2, 4), 0.2);
    assert.deepStrictEqual(numToFixed(0.4, 4), 0.4);
    assert.deepStrictEqual(numToFixed(1.1, 4), 1.1);
    assert.deepStrictEqual(numToFixed(9.9999, 4), 9.9999);
    assert.deepStrictEqual(numToFixed(10.10101, 4), 10.101);
});

it("numToFixed", () => {
    assert.deepStrictEqual(numToFixed(9.9999999999, 10), 9.9999999999);
});
