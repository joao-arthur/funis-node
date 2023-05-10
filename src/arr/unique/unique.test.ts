import { expect, it } from "vitest";
import { unique } from "./unique.js";

it("unique", () => {
    expect(unique([1])).toEqual([1]);
    expect(unique([])).toEqual([]);
    const symbolValue = Symbol(1);
    expect(unique([
        1,
        1,
        "john",
        "john",
        true,
        false,
        true,
        symbolValue,
        symbolValue,
    ])).toEqual(
        [1, "john", true, false, symbolValue],
    );
});
