import { assert, it } from "vitest";
import { compose, pipe, self } from "./standard.js";

it("compose", () => {
    assert.deepStrictEqual(
        compose(
            (num) => `${num}${num}.${num}${num}`,
            (num: number) => num / 2,
            (num: number) => num - 90,
        )(100),
        "55.55",
    );
    assert.deepStrictEqual(
        compose(
            (num) => num + 10,
            (num: number) => -num,
            (num: number) => num - 2,
            (num: number) => num / 2,
            (num: number) => num - 90,
        )(100),
        7,
    );
});

it("pipe", () => {
    assert.deepStrictEqual(
        pipe(
            (num: number) => num - 90,
            (num) => num / 2,
            (num) => `${num}${num}.${num}${num}`,
        )(100),
        "55.55",
    );
    assert.deepStrictEqual(
        pipe(
            (num: number) => num - 90,
            (num) => num / 2,
            (num) => num - 2,
            (num) => -num,
            (num) => num + 10,
        )(100),
        7,
    );
});

it("self", () => {
    const symbol = Symbol("symbol");

    assert.deepStrictEqual(self(1), 1);
    assert.deepStrictEqual(self("hello world"), "hello world");
    assert.deepStrictEqual(self(true), true);
    assert.deepStrictEqual(self({ a: "a" }), { a: "a" });
    assert.deepStrictEqual(self([3, 2, 1]), [3, 2, 1]);
    assert.deepStrictEqual(self(symbol), symbol);
});
