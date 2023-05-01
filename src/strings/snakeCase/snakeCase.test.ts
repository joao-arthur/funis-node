import { expect, it } from "vitest";
import { snakeCase } from "./snakeCase.js";

it("snakeCase", () => {
    expect(snakeCase("")).toBe("");
});

it("snakeCase", () => {
    expect(snakeCase("hey")).toBe("hey");
});

it("snakeCase", () => {
    expect(snakeCase("j S o N")).toBe("j_s_o_n");
    expect(snakeCase("hey Jo3")).toBe("hey_jo3");
});

it("snakeCase", () => {
    expect(snakeCase("j_S_o_N")).toBe("j_s_o_n");
    expect(snakeCase("hey_Jo3")).toBe("hey_jo3");
});

it("snakeCase", () => {
    expect(snakeCase("j-S-o-N")).toBe("j_s_o_n");
    expect(snakeCase("hey-Jo3")).toBe("hey_jo3");
});
