import { describe, expect, it } from "vitest";
import { camelCase } from "./camelCase.js";

describe("camelCase", () => {
    it("should transform empty string to camel case", () => {
        expect(camelCase("")).toBe("");
    });

    it("should transform single word to camel case", () => {
        expect(camelCase("hey")).toBe("hey");
    });

    it("should transform the value separated by space to camel case", () => {
        expect(camelCase("j S o N")).toBe("jSON");
        expect(camelCase("hey Jo3")).toBe("heyJo3");
    });

    it("should transform the value separated by underscore to camel case", () => {
        expect(camelCase("j_S_o_N")).toBe("jSON");
        expect(camelCase("hey_Jo3")).toBe("heyJo3");
    });

    it("should transform the value separated by minus sign to camel case", () => {
        expect(camelCase("j-S-o-N")).toBe("jSON");
        expect(camelCase("hey-Jo3")).toBe("heyJo3");
    });
});
