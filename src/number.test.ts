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

const assertEquals = assert.deepStrictEqual;

it("numIsValid", () => {
    assertEquals(numIsValid(Number.NaN), false);
    assertEquals(numIsValid(undefined), false);
    assertEquals(numIsValid(null), false);
    assertEquals(numIsValid(1), true);
    assertEquals(numIsValid(-1), true);
    assertEquals(numIsValid(0), true);
    assertEquals(numIsValid(3.1), true);
    assertEquals(numIsValid(-1.82), true);
    assertEquals(numIsValid(+0), true);
    assertEquals(numIsValid(-0), true);
    assertEquals(numIsValid(Number.EPSILON), true);
    assertEquals(numIsValid(Number.MAX_SAFE_INTEGER), true);
    assertEquals(numIsValid(Number.NEGATIVE_INFINITY), true);
    assertEquals(numIsValid(Number.POSITIVE_INFINITY), true);
});

it("numCompAsc", () => {
    assertEquals([1, 9, 2, 8, 3, 7, 4].sort(numCompAsc), [1, 2, 3, 4, 7, 8, 9]);
});

it("numCompDesc", () => {
    assertEquals([1, 9, 2, 8, 3, 7, 4].sort(numCompDesc), [9, 8, 7, 4, 3, 2, 1]);
});

it("numClamp", () => {
    assertEquals(numClamp(10, { min: 8, max: 12 }), 10);
    assertEquals(numClamp(10, { min: 0, max: 9 }), 9);
    assertEquals(numClamp(10, { min: 20, max: 100 }), 20);
    assertEquals(numClamp(10, { min: -100, max: -1 }), -1);
    assertEquals(numClamp(-1, { min: -1, max: -1 }), -1);
    assertEquals(numClamp(10, { min: 10, max: 10 }), 10);
    assertEquals(numClamp(5, { min: -1, max: 5 }), 5);
    assertEquals(numClamp(12, { min: 8, max: 12 }), 12);
    assertEquals(numClamp(-1, { min: -1, max: 5 }), -1);
    assertEquals(numClamp(8, { min: 8, max: 12 }), 8);
    assertEquals(numClamp(-1, { min: -1, max: 5 }), -1);
    assertEquals(numClamp(8, { min: 8, max: 12 }), 8);
    assertEquals(numClamp(77, { min: 99 }), 99);
    assertEquals(numClamp(10, { min: 8 }), 10);
    assertEquals(numClamp(-10, { max: 5 }), -10);
    assertEquals(numClamp(846, { max: -1 }), -1);
});

it("numNormalizeZero", () => {
    assertEquals(numNormalizeZero(-0), 0);
    assertEquals(numNormalizeZero(0), 0);
    assertEquals(numNormalizeZero(10), 10);
    assertEquals(numNormalizeZero(-10), -10);
});

it("numParse", () => {
    assertEquals(numParse("US$4", { prefix: "R$" }), undefined);
    assertEquals(numParse("R$-6", { prefix: "rem" }), undefined);
    assertEquals(numParse("@-1", { prefix: "km/h" }), undefined);
    assertEquals(numParse("4px", { suffix: "rem" }), undefined);
    assertEquals(numParse("-6em", { suffix: "rem" }), undefined);
    assertEquals(numParse("-1m/s", { suffix: "km/h" }), undefined);
    assertEquals(numParse("$100.00", { prefix: "$" }), 100.00);
    assertEquals(numParse("US$0", { prefix: "US$" }), 0);
    assertEquals(numParse("R$-1.53", { prefix: "R$" }), -1.53);
    assertEquals(numParse("^1.4", { prefix: "^" }), 1.4);
    assertEquals(numParse("100px", { suffix: "px" }), 100);
    assertEquals(numParse("0px", { suffix: "px" }), 0);
    assertEquals(numParse("-1.53m/s", { suffix: "m/s" }), -1.53);
    assertEquals(numParse("1.4kº", { suffix: "kº" }), 1.4);
    assertEquals(numParse("74%", { suffix: "%" }), 74);
    assertEquals(numParse("width: 100px", { prefix: "width: ", suffix: "px" }), 100);
    assertEquals(numParse("speed: -1.53m/s", { prefix: "speed: ", suffix: "m/s" }), -1.53);
    assertEquals(numParse("US$4 donnut", { prefix: "R$", suffix: "apple" }), undefined);
    assertEquals(numParse("US$4 donnut", { prefix: "US$", suffix: "apple" }), undefined);
    assertEquals(numParse("speed: -4px", { prefix: "speed: " }), undefined);
    assertEquals(numParse("speed: -4px", { suffix: "px" }), undefined);
    assertEquals(numParse(":2em", { prefix: ":" }), undefined);
    assertEquals(numParse(":2em", { suffix: "em" }), undefined);
    assertEquals(numParse("I see", { prefix: "I see" }), undefined);
    assertEquals(numParse("penguins", { suffix: "penguins" }), undefined);
    assertEquals(numParse("I see penguins", { prefix: "I see ", suffix: "penguins" }), undefined);
});

it("numRange", () => {
    assertEquals(numRange(-1, 2), [-1, 0, 1, 2]);
    assertEquals(numRange(0, 10.3), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assertEquals(numRange(4, 5.1), [4, 5]);
    assertEquals(numRange(2, -1), []);
    assertEquals(numRange(-1, 2, -1), []);
    assertEquals(numRange(10.2, 0), []);
    assertEquals(numRange(0, 10.2, -1), []);
    assertEquals(numRange(5, 4.2), []);
    assertEquals(numRange(4.2, 5, -1), []);
    assertEquals(numRange(2, 5.3, 0.5), [2, 2.5, 3, 3.5, 4, 4.5, 5]);
    assertEquals(numRange(-3.5, -2.5, 0.2), [-3.5, -3.3, -3.1, -2.9, -2.7, -2.5]);
    assertEquals(numRange(2, -1, -1), [2, 1, 0, -1]);
    assertEquals(numRange(10.2, 9, -0.2), [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]);
    assertEquals(numRange(5, 4.2, -1), [5]);
});

it("numLazyRange", () => {
    const itter = numLazyRange(-1, 2);
    assertEquals(itter.next(), { done: false, value: -1 });
    assertEquals(itter.next(), { done: false, value: 0 });
    assertEquals(itter.next(), { done: false, value: 1 });
    assertEquals(itter.next(), { done: false, value: 2 });
    assertEquals(itter.next(), { done: true, value: undefined });
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, 5.3, 0.5);
    assertEquals(itter.next(), { done: false, value: 2 });
    assertEquals(itter.next(), { done: false, value: 2.5 });
    assertEquals(itter.next(), { done: false, value: 3 });
    assertEquals(itter.next(), { done: false, value: 3.5 });
    assertEquals(itter.next(), { done: false, value: 4 });
    assertEquals(itter.next(), { done: false, value: 4.5 });
    assertEquals(itter.next(), { done: false, value: 5 });
    assertEquals(itter.next(), { done: true, value: undefined });
});

it("numLazyRange", () => {
    const itter = numLazyRange(-1, 2);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assertEquals(values, [-1, 0, 1, 2]);
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, -1);
    assertEquals(itter.next(), { done: true, value: undefined });
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, -1);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assertEquals(values, []);
});

it("numLazyRange", () => {
    const itter = numLazyRange(2, 5.3, 0.5);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assertEquals(values, [2, 2.5, 3, 3.5, 4, 4.5, 5]);
});

it("numToFixed", () => {
    assertEquals(numToFixed(0, 0), 0);
    assertEquals(numToFixed(3, 0), 3);
    assertEquals(numToFixed(0.2, 0), 0);
    assertEquals(numToFixed(0.4, 0), 0);
    assertEquals(numToFixed(1.1, 0), 1);
    assertEquals(numToFixed(9.9999, 0), 10);
    assertEquals(numToFixed(10.10101, 0), 10);
    assertEquals(numToFixed(0, 1), 0);
    assertEquals(numToFixed(3, 1), 3);
    assertEquals(numToFixed(0.2, 1), 0.2);
    assertEquals(numToFixed(0.4, 1), 0.4);
    assertEquals(numToFixed(1.1, 1), 1.1);
    assertEquals(numToFixed(9.9999, 1), 10);
    assertEquals(numToFixed(10.10101, 1), 10.1);
    assertEquals(numToFixed(0, 2), 0);
    assertEquals(numToFixed(3, 2), 3);
    assertEquals(numToFixed(0.2, 2), 0.2);
    assertEquals(numToFixed(0.4, 2), 0.4);
    assertEquals(numToFixed(1.1, 2), 1.1);
    assertEquals(numToFixed(9.9999, 2), 10);
    assertEquals(numToFixed(10.10101, 2), 10.1);
    assertEquals(numToFixed(0, 3), 0);
    assertEquals(numToFixed(3, 3), 3);
    assertEquals(numToFixed(0.2, 3), 0.2);
    assertEquals(numToFixed(0.4, 3), 0.4);
    assertEquals(numToFixed(1.1, 3), 1.1);
    assertEquals(numToFixed(9.9999, 3), 10);
    assertEquals(numToFixed(10.10101, 3), 10.101);
    assertEquals(numToFixed(0, 4), 0);
    assertEquals(numToFixed(3, 4), 3);
    assertEquals(numToFixed(0.2, 4), 0.2);
    assertEquals(numToFixed(0.4, 4), 0.4);
    assertEquals(numToFixed(1.1, 4), 1.1);
    assertEquals(numToFixed(9.9999, 4), 9.9999);
    assertEquals(numToFixed(10.10101, 4), 10.101);
    assertEquals(numToFixed(9.9999999999, 10), 9.9999999999);
});

it("numRandom", () => {
    assertEquals(numRandom(0, 0), 0);
    assertEquals(numRandom(5, 5), 5);
    assertEquals(numRandom(10, 10), 10);
    for (let i = 0; i < 100; i++) {
        assertEquals(numRandom(10, -10) <= 10, true);
        assertEquals(numRandom(10, -10) >= -10, true);
    }
});
