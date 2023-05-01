import { describe, expect, it } from "vitest";
import { kebabCase } from "./kebabCase.js";

describe("kebabCase", () => {
    it("should transform empty string to kebab case", () => {
        expect(kebabCase("")).toBe("");
    });

    it("should transform single word to kebab case", () => {
        expect(kebabCase("hey")).toBe("hey");
    });

    it("should transform the value separated by space to kebab case", () => {
        expect(kebabCase("j S o N")).toBe("j-s-o-n");
        expect(kebabCase("hey Jo3")).toBe("hey-jo3");
    });

    it("should transform the value separated by underscore to kebab case", () => {
        expect(kebabCase("j_S_o_N")).toBe("j-s-o-n");
        expect(kebabCase("hey_Jo3")).toBe("hey-jo3");
    });

    it("should transform the value separated by minus sign to kebab case", () => {
        expect(kebabCase("j-S-o-N")).toBe("j-s-o-n");
        expect(kebabCase("hey-Jo3")).toBe("hey-jo3");
    });
});
