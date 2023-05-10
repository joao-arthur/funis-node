import { expect, it } from "vitest";
import { pick } from "./pick.js";

it("pick", () => {
    expect(pick({}, [])).toEqual({});
    expect(pick({}, ["animal", "species", "age"])).toEqual({});
});

it("pick", () => {
    expect(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            [],
        ),
    ).toEqual({});
    expect(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal"],
        ),
    ).toEqual({ animal: "dog" });
    expect(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal", "species", "age"],
        ),
    ).toEqual(
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
});
