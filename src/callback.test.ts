import { assert, it } from "vitest";
import { eq, ge, gt, le, lt, ne } from "./callback.js";

it("eq", () => {
    assert.deepStrictEqual(eq(1)(0), false);
    assert.deepStrictEqual(eq(1)(1), true);
    assert.deepStrictEqual(eq(1)(2), false);
});

it("ne", () => {
    assert.deepStrictEqual(ne(1)(0), true);
    assert.deepStrictEqual(ne(1)(1), false);
    assert.deepStrictEqual(ne(1)(2), true);
});

it("ge", () => {
    assert.deepStrictEqual(ge(1)(0), false);
    assert.deepStrictEqual(ge(1)(1), true);
    assert.deepStrictEqual(ge(1)(2), true);
});

it("gt", () => {
    assert.deepStrictEqual(gt(1)(0), false);
    assert.deepStrictEqual(gt(1)(1), false);
    assert.deepStrictEqual(gt(1)(2), true);
});

it("le", () => {
    assert.deepStrictEqual(le(1)(0), true);
    assert.deepStrictEqual(le(1)(1), true);
    assert.deepStrictEqual(le(1)(2), false);
});

it("lt", () => {
    assert.deepStrictEqual(lt(1)(0), true);
    assert.deepStrictEqual(lt(1)(1), false);
    assert.deepStrictEqual(lt(1)(2), false);
});
