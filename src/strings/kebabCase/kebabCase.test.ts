import { expect, it } from "vitest";
import { kebabCase } from "./kebabCase.js";

it("kebabCase", () => {
    expect(kebabCase("")).toBe("");
});

it("kebabCase", () => {
    expect(kebabCase("hey")).toBe("hey");
});

it("kebabCase", () => {
    expect(kebabCase("j S o N")).toBe("j-s-o-n");
    expect(kebabCase("j_S_o_N")).toBe("j-s-o-n");
    expect(kebabCase("j-S-o-N")).toBe("j-s-o-n");
});

it("kebabCase", () => {
    expect(kebabCase("hey Jo3")).toBe("hey-jo3");
    expect(kebabCase("hey_Jo3")).toBe("hey-jo3");
    expect(kebabCase("hey-Jo3")).toBe("hey-jo3");
});
