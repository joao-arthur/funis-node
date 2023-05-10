import { expect, it } from "vitest";
import { intersect } from "./intersect.js";

it("intersect", () => {
    expect(intersect([])).toEqual({});
});

it("intersect", () => {
    expect(
        intersect([{ name: "Steve Harris", country: "UK" }]),
    ).toEqual({ name: "Steve Harris", country: "UK" });
});

it("intersect", () => {
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
