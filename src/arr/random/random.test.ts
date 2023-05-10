import { expect, it } from "vitest";
import { random } from "./random.js";

it("random", () => {
    expect(random([])).toBe(undefined);
});

it("random", () => {
    expect(random([true])).toBe(true);
    expect(random([5])).toBe(5);
    expect(random(["Memento mori"])).toBe("Memento mori");
});

it("random", () => {
    const result = random([true, false, 0, 1, "y", "n"]);
    expect(
        [true, false, 0, 1, "y", "n"].includes(result!),
    ).toBe(true);
});
