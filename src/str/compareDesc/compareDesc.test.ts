import { expect, it } from "vitest";
import { compareDesc } from "./compareDesc.js";

it("compareDesc", () => {
    expect(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(
            compareDesc,
        ),
    ).toEqual(["w", "q", "p", "o", "W", "Q", "P", "O"]);
});
