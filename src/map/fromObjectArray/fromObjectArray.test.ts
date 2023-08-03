import { expect, it } from "vitest";
import { fromObjectArray } from "./fromObjectArray.js";

it("fromObjectArray", () => {
    expect(
        fromObjectArray([], "id"),
    ).toEqual(
        new Map(),
    );
});

it("fromObjectArray", () => {
    expect(
        fromObjectArray(
            [
                { name: "Alex Lifeson", instrument: "Guitar" },
                { name: "Geddy Lee", instrument: "Bass" },
                { name: "Neil Peart", instrument: "Drums" },
            ],
            "instrument",
        ),
    ).toEqual(
        new Map([
            ["Guitar", { name: "Alex Lifeson", instrument: "Guitar" }],
            ["Bass", { name: "Geddy Lee", instrument: "Bass" }],
            ["Drums", { name: "Neil Peart", instrument: "Drums" }],
        ]),
    );
});
