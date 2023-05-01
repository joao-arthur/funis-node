import { expect, it } from "vitest";
import { omit } from "./omit.js";

it("omit", () => {
    expect(omit({}, [])).toEqual({});
    expect(omit({}, ["animal", "species", "age"])).toEqual({});
});

it("omit", () => {
    expect(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            [],
        ),
    ).toEqual(
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
    expect(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal"],
        ),
    ).toEqual({ species: "Canis lupus", age: 5 });
    expect(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal", "species", "age"],
        ),
    ).toEqual({});
});
