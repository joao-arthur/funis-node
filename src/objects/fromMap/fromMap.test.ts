import { expect, it } from "vitest";
import { fromMap } from "./fromMap.js";

it("fromMap", () => {
    expect(fromMap(new Map([]))).toEqual({});
});

it("fromMap", () => {
    expect(fromMap(
        new Map([
            ["Paul", "Bass"],
            ["John", "Guitar"],
            ["George", "Guitar"],
            ["Ringo", "Drums"],
        ]),
    )).toEqual({
        Paul: "Bass",
        John: "Guitar",
        George: "Guitar",
        Ringo: "Drums",
    });
});
