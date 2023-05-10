import { expect, it } from "vitest";
import { mapKeys } from "./mapKeys.js";

it("mapKeys", () => {
    expect(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (key) => key,
        ),
    ).toEqual({
        a: 1,
        b: "two",
        c: true,
        4: "nada",
    });
    expect(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (key) => `v2_${key}_test`,
        ),
    ).toEqual({
        v2_a_test: 1,
        v2_b_test: "two",
        v2_c_test: true,
        v2_4_test: "nada",
    });
    expect(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => "key",
        ),
    ).toEqual({
        key: true,
    });
});
