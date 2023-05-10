import { expect, it } from "vitest";
import { once } from "./once.js";

it("once", () => {
    expect(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => item === "Roses",
        ),
    ).toBe(false);
    expect(once([5, 3, 1], (item) => item < 0)).toBe(false);
});

it("once", () => {
    expect(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => item === "Buckethead",
        ),
    ).toBe(true);
    expect(once([5, 3, 1], (item) => item > 4)).toBe(true);
});

it("once", () => {
    expect(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) =>
                [
                    "Axl",
                    "Slash",
                    "Duff",
                    "Buckethead",
                ].includes(item),
        ),
    ).toBe(false);
    expect(once([5, 3, 1], (item) => item > 0)).toBe(false);
});
