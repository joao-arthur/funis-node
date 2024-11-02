import { assert, it } from "vitest";
import { eq, ge, gt, le, lt, ne } from "./callback.js";

const assertEquals = assert.deepStrictEqual;

it("eq", () => {
    assertEquals(eq(1)(0), false);
    assertEquals(eq(1)(1), true);
    assertEquals(eq(1)(2), false);
});

it("ne", () => {
    assertEquals(ne(1)(0), true);
    assertEquals(ne(1)(1), false);
    assertEquals(ne(1)(2), true);
});

it("ge", () => {
    assertEquals(ge(1)(0), false);
    assertEquals(ge(1)(1), true);
    assertEquals(ge(1)(2), true);
});

it("gt", () => {
    assertEquals(gt(1)(0), false);
    assertEquals(gt(1)(1), false);
    assertEquals(gt(1)(2), true);
});

it("le", () => {
    assertEquals(le(1)(0), true);
    assertEquals(le(1)(1), true);
    assertEquals(le(1)(2), false);
});

it("lt", () => {
    assertEquals(lt(1)(0), true);
    assertEquals(lt(1)(1), false);
    assertEquals(lt(1)(2), false);
});
