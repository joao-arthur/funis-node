import { expect, it } from "vitest";
import { fromObject } from "./fromObject.js";

it("fromObject", () => {
    expect(fromObject({})).toEqual(new Map([]));
});

it("fromObject", () => {
    expect(fromObject({
        Paul: "Bass",
        John: "Guitar",
        George: "Guitar",
        Ringo: "Drums",
    })).toEqual(
        new Map([
            ["Paul", "Bass"],
            ["John", "Guitar"],
            ["George", "Guitar"],
            ["Ringo", "Drums"],
        ]),
    );
});
