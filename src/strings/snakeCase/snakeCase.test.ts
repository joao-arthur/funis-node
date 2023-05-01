import { describe, expect, it } from "vitest";
import { snakeCase } from "./snakeCase.js";

describe("snakeCase", () => {
    it("should transform empty string to snake case", () => {
        expect(snakeCase("")).toBe("");
    });

    it("should transform single word to snake case", () => {
        expect(snakeCase("hey")).toBe("hey");
    });

    it("should transform the value separated by space to snake case", () => {
        expect(snakeCase("j S o N")).toBe("j_s_o_n");
        expect(snakeCase("hey Jo3")).toBe("hey_jo3");
    });

    it("should transform the value separated by underscore to snake case", () => {
        expect(snakeCase("j_S_o_N")).toBe("j_s_o_n");
        expect(snakeCase("hey_Jo3")).toBe("hey_jo3");
    });

    it("should transform the value separated by minus sign to snake case", () => {
        expect(snakeCase("j-S-o-N")).toBe("j_s_o_n");
        expect(snakeCase("hey-Jo3")).toBe("hey_jo3");
    });
});
