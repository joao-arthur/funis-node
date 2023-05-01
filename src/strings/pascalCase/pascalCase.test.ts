import { expect, it } from "vitest";
import { pascalCase } from "./pascalCase.js";

it("pascalCase", () => {
    expect(pascalCase("")).toBe("");
});

it("pascalCase", () => {
    expect(pascalCase("hey")).toBe("Hey");
});

it("pascalCase", () => {
    expect(pascalCase("j S o N")).toBe("JSON");
    expect(pascalCase("hey Jo3")).toBe("HeyJo3");
});

it("pascalCase", () => {
    expect(pascalCase("j_S_o_N")).toBe("JSON");
    expect(pascalCase("hey_Jo3")).toBe("HeyJo3");
});

it("pascalCase", () => {
    expect(pascalCase("j-S-o-N")).toBe("JSON");
    expect(pascalCase("hey-Jo3")).toBe("HeyJo3");
});
