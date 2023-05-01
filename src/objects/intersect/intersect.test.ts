import { describe, expect, it } from "vitest";
import { intersect } from "./intersect.js";

describe("intersect", () => {
    it("should intersect empty array", () => {
        expect(intersect([])).toEqual({});
    });

    it("should intersect one object entry", () => {
        expect(
            intersect([{ name: "Steve Harris", country: "UK" }]),
        ).toEqual({ name: "Steve Harris", country: "UK" });
    });

    it("should return the entries present in all arrays", () => {
        expect(
            intersect(
                [
                    {
                        name: "Cliff Burton",
                        band: "Metallica",
                        country: "US",
                    },
                    {
                        name: "James Hetfield",
                        band: "Metallica",
                        country: "US",
                    },
                    {
                        name: "Kirk Hammett",
                        band: "Metallica",
                        country: "US",
                    },
                ],
            ),
        ).toEqual({ band: "Metallica", country: "US" });
    });
});
