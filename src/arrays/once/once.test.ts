import { describe, expect, it } from "vitest";
import { once } from "./once.js";

describe("once", () => {
    it("should return false if the callback does not return true", () => {
        expect(
            once(
                ["Axl", "Slash", "Duff", "Buckethead"],
                (item) => item === "Roses",
            ),
        ).toBe(false);
        expect(once([5, 3, 1], (item) => item < 0)).toBe(false);
    });

    it("should return true if the callback returns true once", () => {
        expect(
            once(
                ["Axl", "Slash", "Duff", "Buckethead"],
                (item) => item === "Buckethead",
            ),
        ).toBe(true);
        expect(once([5, 3, 1], (item) => item > 4)).toBe(true);
    });

    it("should return false if the callback returns true more than once", () => {
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
});
