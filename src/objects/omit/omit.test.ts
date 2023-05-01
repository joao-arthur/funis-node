import { describe, expect, it } from "vitest";
import { omit } from "./omit.js";

describe("omit", () => {
    it("should omit the keys of empty object", () => {
        expect(omit({}, [])).toEqual({});
        expect(omit({}, ["animal", "species", "age"])).toEqual({});
    });

    it("should omit the keys of an object", () => {
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
});
