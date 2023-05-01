import { expect, it } from "vitest";
import { last } from "./last.js";

it("last", () => {
    expect(last([4, 5, 6])).toBe(6);
    expect(
        last(["George", "Paul", "John", "Ringo"]),
    ).toBe("Ringo");
    expect(last([false, true])).toBe(true);
});

it("last", () => {
    expect(last([])).toBe(undefined);
});
