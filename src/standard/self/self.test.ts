import { expect, it } from "vitest";
import { self } from "./self.js";

it("self", () => {
    const symbol = Symbol("symbol");

    expect(self(1)).toBe(1);
    expect(self("hello world")).toBe("hello world");
    expect(self(true)).toBe(true);
    expect(self({ a: "a" })).toEqual({ a: "a" });
    expect(self([3, 2, 1])).toEqual([3, 2, 1]);
    expect(self(symbol)).toEqual(symbol);
});
