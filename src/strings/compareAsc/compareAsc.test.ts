import { expect, it } from "vitest";
import { compareAsc } from "./compareAsc.js";

it("compareAsc", () => {
    expect(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(compareAsc),
    ).toEqual(["O", "P", "Q", "W", "o", "p", "q", "w"]);
});
