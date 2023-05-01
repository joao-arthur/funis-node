import { describe, expect, it } from "vitest";
import { compose } from "./compose.js";

describe("compose", () => {
    it("should compose the functions and execute", () => {
        expect(
            compose(
                (num) => `${num}${num}.${num}${num}`,
                (num: number) => num / 2,
                (num: number) => num - 90,
            )(100),
        ).toBe("55.55");

        expect(
            compose(
                (num) => num + 10,
                (num: number) => -num,
                (num: number) => num - 2,
                (num: number) => num / 2,
                (num: number) => num - 90,
            )(100),
        ).toBe(7);
    });
});
