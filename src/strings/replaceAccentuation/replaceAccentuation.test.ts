import { describe, expect, it } from "vitest";
import { replaceAccentuation } from "./replaceAccentuation.js";

describe("replaceAccentuation", () => {
    it("should replace the lower case vowel accentuation", () => {
        expect(replaceAccentuation("áéíóú")).toBe("aeiou");
        expect(replaceAccentuation("àèìòù")).toBe("aeiou");
        expect(replaceAccentuation("ãẽĩõũ")).toBe("aeiou");
        expect(replaceAccentuation("äëïöü")).toBe("aeiou");
        expect(replaceAccentuation("âêîôû")).toBe("aeiou");
        expect(replaceAccentuation("ȁȅȉȍȕ")).toBe("aeiou");
        expect(replaceAccentuation("āēīōū")).toBe("aeiou");
        expect(replaceAccentuation("ăĕ")).toBe("ae");
        expect(replaceAccentuation("ęį")).toBe("ei");
        expect(replaceAccentuation("őű")).toBe("ou");
        expect(replaceAccentuation("åů")).toBe("au");
        expect(replaceAccentuation("ė")).toBe("e");
        expect(replaceAccentuation("ě")).toBe("e");
        expect(replaceAccentuation("ø")).toBe("o");
        expect(replaceAccentuation("ǘ")).toBe("u");
        expect(replaceAccentuation("ǜ")).toBe("u");
    });

    it("should replace the upper case vowel accentuation", () => {
        expect(replaceAccentuation("ÁÉÍÓÚ")).toBe("AEIOU");
        expect(replaceAccentuation("ÀÈÌÒÙ")).toBe("AEIOU");
        expect(replaceAccentuation("ÃẼĨÕŨ")).toBe("AEIOU");
        expect(replaceAccentuation("ÄËÏÖÜ")).toBe("AEIOU");
        expect(replaceAccentuation("ÂÊÎÔÛ")).toBe("AEIOU");
        expect(replaceAccentuation("ȀȄȈȌȔ")).toBe("AEIOU");
        expect(replaceAccentuation("ĀĒĪŌŪ")).toBe("AEIOU");
        expect(replaceAccentuation("ĂĔ")).toBe("AE");
        expect(replaceAccentuation("ĘĮ")).toBe("EI");
        expect(replaceAccentuation("ŐŰ")).toBe("OU");
        expect(replaceAccentuation("ÅŮ")).toBe("AU");
        expect(replaceAccentuation("Ė")).toBe("E");
        expect(replaceAccentuation("Ě")).toBe("E");
        expect(replaceAccentuation("Ø")).toBe("O");
        expect(replaceAccentuation("Ǘ")).toBe("U");
        expect(replaceAccentuation("Ǜ")).toBe("U");
    });

    it("should replace the lower case consonant accentuation", () => {
        expect(
            replaceAccentuation("ćǵḱĺḿńṕŕśẃýź"),
        ).toBe("cgklmnprswyz");
        expect(replaceAccentuation("ĉĝĥĵŝŵŷẑ")).toBe("cghjswyz");
        expect(replaceAccentuation("čňřšž")).toBe("cnrsz");
        expect(replaceAccentuation("ḧẗẅẍÿ")).toBe("htwxy");
        expect(replaceAccentuation("ķļņț")).toBe("klnt");
        expect(replaceAccentuation("çḉşţ")).toBe("ccst");
        expect(replaceAccentuation("đħłŧ")).toBe("dhlt");
        expect(replaceAccentuation("ǹẁỳ")).toBe("nwy");
        expect(replaceAccentuation("ñṽỹ")).toBe("nvy");
        expect(replaceAccentuation("ďľť")).toBe("dlt");
        expect(replaceAccentuation("ȑ")).toBe("r");
        expect(replaceAccentuation("ģ")).toBe("g");
        expect(replaceAccentuation("ğ")).toBe("g");
        expect(replaceAccentuation("ż")).toBe("z");
    });

    it("should replace the upper case consonant accentuation", () => {
        expect(
            replaceAccentuation("ĆǴḰĹḾŃṔŔŚẂÝŹ"),
        ).toBe("CGKLMNPRSWYZ");
        expect(replaceAccentuation("ĈĜĤĴŜŴŶẐ")).toBe("CGHJSWYZ");
        expect(replaceAccentuation("ČĎŇŘŠŤŽ")).toBe("CDNRSTZ");
        expect(replaceAccentuation("ḦẄẌŸ")).toBe("HWXY");
        expect(replaceAccentuation("ÇḈŞŢ")).toBe("CCST");
        expect(replaceAccentuation("ĐĦŁŦ")).toBe("DHLT");
        expect(replaceAccentuation("ǸẀỲ")).toBe("NWY");
        expect(replaceAccentuation("ÑṼỸ")).toBe("NVY");
        expect(replaceAccentuation("ĻŅȚ")).toBe("LNT");
        expect(replaceAccentuation("ĢĶ")).toBe("GK");
        expect(replaceAccentuation("Ȑ")).toBe("R");
        expect(replaceAccentuation("Ğ")).toBe("G");
        expect(replaceAccentuation("Ľ")).toBe("L");
        expect(replaceAccentuation("Ż")).toBe("Z");
    });

    it("should return the non accentuated characters", () => {
        expect(
            replaceAccentuation(
                "abcdefghijklmnopqrstuvwyxz0123456789",
            ),
        ).toBe(
            "abcdefghijklmnopqrstuvwyxz0123456789",
        );
        expect(
            replaceAccentuation(
                "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
            ),
        ).toBe(
            "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
        );
        expect(
            replaceAccentuation(
                "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
            ),
        ).toBe(
            "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
        );
    });
});
