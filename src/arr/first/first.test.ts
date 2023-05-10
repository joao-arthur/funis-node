import { expect, it } from "vitest";
import { first } from "./first.js";

it("first", () => {
    expect(first([])).toBe(undefined);
});

it("first", () => {
    expect(first([4, 5, 6])).toBe(4);
    expect(
        first(["George", "Paul", "John", "Ringo"]),
    ).toBe("George");
    expect(first([false, true])).toBe(false);
});
