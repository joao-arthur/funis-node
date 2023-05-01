import { expect, it } from "vitest";
import { pipe } from "./pipe.js";

it("pipe", () => {
    expect(
        pipe(
            (num: number) => num - 90,
            (num) => num / 2,
            (num) => `${num}${num}.${num}${num}`,
        )(100),
    ).toBe("55.55");

    expect(
        pipe(
            (num: number) => num - 90,
            (num) => num / 2,
            (num) => num - 2,
            (num) => -num,
            (num) => num + 10,
        )(100),
    ).toBe(7);
});
