import { expect, it } from "vitest";
import { disjoint } from "./disjoint.js";

it("disjoint", () => {
    expect(disjoint([])).toEqual({});
});

it("disjoint", () => {
    expect(
        disjoint([{ name: "Steve Harris", country: "UK" }]),
    ).toEqual({ name: "Steve Harris", country: "UK" });
    expect(
        disjoint(
            [
                { name: "Steve Harris", country: "UK" },
                { name: "Megadeth", foundation: 1983 },
            ],
        ),
    ).toEqual({ country: "UK", foundation: 1983 });
});
