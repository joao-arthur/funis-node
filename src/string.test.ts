import { assert, it } from "vitest";
import {
    strCamelCase,
    strCompAsc,
    strCompDesc,
    strIsValid,
    strKebabCase,
    strPascalCase,
    strRandom,
    strRemoveAccentuation,
    strReplaceAccentuation,
    strSnakeCase,
} from "./string.js";

it("strCamelCase", () => {
    assert.deepStrictEqual(strCamelCase(""), "");
});

it("strCamelCase", () => {
    assert.deepStrictEqual(strCamelCase("hey"), "hey");
});

it("strCamelCase", () => {
    assert.deepStrictEqual(strCamelCase("j S o N"), "jSON");
    assert.deepStrictEqual(strCamelCase("j_S_o_N"), "jSON");
    assert.deepStrictEqual(strCamelCase("j-S-o-N"), "jSON");
});

it("strCamelCase", () => {
    assert.deepStrictEqual(strCamelCase("hey Jo3"), "heyJo3");
    assert.deepStrictEqual(strCamelCase("hey_Jo3"), "heyJo3");
    assert.deepStrictEqual(strCamelCase("hey-Jo3"), "heyJo3");
});

it("strCompAsc", () => {
    assert.deepStrictEqual(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(strCompAsc),
        ["O", "P", "Q", "W", "o", "p", "q", "w"],
    );
});

it("strCompDesc", () => {
    assert.deepStrictEqual(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(
            strCompDesc,
        ),
        ["w", "q", "p", "o", "W", "Q", "P", "O"],
    );
});

it("strIsValid", () => {
    assert.deepStrictEqual(strIsValid(undefined), false);
    assert.deepStrictEqual(strIsValid(null), false);
});

it("strIsValid", () => {
    assert.deepStrictEqual(strIsValid(""), true);
    assert.deepStrictEqual(strIsValid(" "), true);
    assert.deepStrictEqual(strIsValid("Lorem ipsum"), true);
});

it("strKebabCase", () => {
    assert.deepStrictEqual(strKebabCase(""), "");
});

it("strKebabCase", () => {
    assert.deepStrictEqual(strKebabCase("hey"), "hey");
});

it("strKebabCase", () => {
    assert.deepStrictEqual(strKebabCase("j S o N"), "j-s-o-n");
    assert.deepStrictEqual(strKebabCase("j_S_o_N"), "j-s-o-n");
    assert.deepStrictEqual(strKebabCase("j-S-o-N"), "j-s-o-n");
});

it("strKebabCase", () => {
    assert.deepStrictEqual(strKebabCase("hey Jo3"), "hey-jo3");
    assert.deepStrictEqual(strKebabCase("hey_Jo3"), "hey-jo3");
    assert.deepStrictEqual(strKebabCase("hey-Jo3"), "hey-jo3");
});

it("strPascalCase", () => {
    assert.deepStrictEqual(strPascalCase(""), "");
});

it("strPascalCase", () => {
    assert.deepStrictEqual(strPascalCase("hey"), "Hey");
});

it("strPascalCase", () => {
    assert.deepStrictEqual(strPascalCase("j S o N"), "JSON");
    assert.deepStrictEqual(strPascalCase("j_S_o_N"), "JSON");
    assert.deepStrictEqual(strPascalCase("j-S-o-N"), "JSON");
});

it("strPascalCase", () => {
    assert.deepStrictEqual(strPascalCase("hey Jo3"), "HeyJo3");
    assert.deepStrictEqual(strPascalCase("hey_Jo3"), "HeyJo3");
    assert.deepStrictEqual(strPascalCase("hey-Jo3"), "HeyJo3");
});

it("strRandom", () => {
    assert.deepStrictEqual(strRandom(""), "");
    assert.deepStrictEqual(strRandom("a"), "a");
    assert.deepStrictEqual(strRandom("b"), "b");
    assert.deepStrictEqual(strRandom("c"), "c");
});

it("strRandom", () => {
    assert.deepStrictEqual(strRandom("Botticelli").length, 1);
    assert.deepStrictEqual("Botticelli".includes(strRandom("Botticelli")), true);
    assert.deepStrictEqual(strRandom("Michelangelo").length, 1);
    assert.deepStrictEqual("Michelangelo".includes(strRandom("Michelangelo")), true);
});

it("strRemoveAccentuation", () => {
    assert.deepStrictEqual(strRemoveAccentuation("áéíóú"), "");
    assert.deepStrictEqual(strRemoveAccentuation("àèìòù"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ãẽĩõũ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("äëïöü"), "");
    assert.deepStrictEqual(strRemoveAccentuation("âêîôû"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ȁȅȉȍȕ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("āēīōū"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ăĕ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ęį"), "");
    assert.deepStrictEqual(strRemoveAccentuation("őű"), "");
    assert.deepStrictEqual(strRemoveAccentuation("åů"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ė"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ě"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ø"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ǘ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ǜ"), "");
});

it("strRemoveAccentuation", () => {
    assert.deepStrictEqual(strRemoveAccentuation("ÁÉÍÓÚ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÀÈÌÒÙ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÃẼĨÕŨ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÄËÏÖÜ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÂÊÎÔÛ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ȀȄȈȌȔ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĀĒĪŌŪ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĂĔ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĘĮ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ŐŰ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÅŮ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ė"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ě"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ø"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ǘ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ǜ"), "");
});

it("strRemoveAccentuation", () => {
    assert.deepStrictEqual(strRemoveAccentuation("ćǵḱĺḿńṕŕśẃýź"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĉĝĥĵŝŵŷẑ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("čňřšž"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ḧẗẅẍÿ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ķļņț"), "");
    assert.deepStrictEqual(strRemoveAccentuation("çḉşţ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("đħłŧ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ǹẁỳ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ñṽỹ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ďľť"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ȑ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ģ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ğ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ż"), "");
});

it("strRemoveAccentuation", () => {
    assert.deepStrictEqual(strRemoveAccentuation("ĆǴḰĹḾŃṔŔŚẂÝŹ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĈĜĤĴŜŴŶẐ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ČĎŇŘŠŤŽ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ḦẄẌŸ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÇḈŞŢ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĐĦŁŦ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ǸẀỲ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ÑṼỸ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĻŅȚ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("ĢĶ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ȑ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ğ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ľ"), "");
    assert.deepStrictEqual(strRemoveAccentuation("Ż"), "");
});

it("strRemoveAccentuation", () => {
    assert.deepStrictEqual(
        strRemoveAccentuation(
            "abcdefghijklmnopqrstuvwyxz0123456789",
        ),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assert.deepStrictEqual(
        strRemoveAccentuation(
            "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
        ),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assert.deepStrictEqual(
        strRemoveAccentuation(
            "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
        ),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});

it("strReplaceAccentuation", () => {
    assert.deepStrictEqual(strReplaceAccentuation("áéíóú"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("àèìòù"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("ãẽĩõũ"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("äëïöü"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("âêîôû"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("ȁȅȉȍȕ"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("āēīōū"), "aeiou");
    assert.deepStrictEqual(strReplaceAccentuation("ăĕ"), "ae");
    assert.deepStrictEqual(strReplaceAccentuation("ęį"), "ei");
    assert.deepStrictEqual(strReplaceAccentuation("őű"), "ou");
    assert.deepStrictEqual(strReplaceAccentuation("åů"), "au");
    assert.deepStrictEqual(strReplaceAccentuation("ė"), "e");
    assert.deepStrictEqual(strReplaceAccentuation("ě"), "e");
    assert.deepStrictEqual(strReplaceAccentuation("ø"), "o");
    assert.deepStrictEqual(strReplaceAccentuation("ǘ"), "u");
    assert.deepStrictEqual(strReplaceAccentuation("ǜ"), "u");
});

it("strReplaceAccentuation", () => {
    assert.deepStrictEqual(strReplaceAccentuation("ÁÉÍÓÚ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ÀÈÌÒÙ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ÃẼĨÕŨ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ÄËÏÖÜ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ÂÊÎÔÛ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ȀȄȈȌȔ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ĀĒĪŌŪ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccentuation("ĂĔ"), "AE");
    assert.deepStrictEqual(strReplaceAccentuation("ĘĮ"), "EI");
    assert.deepStrictEqual(strReplaceAccentuation("ŐŰ"), "OU");
    assert.deepStrictEqual(strReplaceAccentuation("ÅŮ"), "AU");
    assert.deepStrictEqual(strReplaceAccentuation("Ė"), "E");
    assert.deepStrictEqual(strReplaceAccentuation("Ě"), "E");
    assert.deepStrictEqual(strReplaceAccentuation("Ø"), "O");
    assert.deepStrictEqual(strReplaceAccentuation("Ǘ"), "U");
    assert.deepStrictEqual(strReplaceAccentuation("Ǜ"), "U");
});

it("strReplaceAccentuation", () => {
    assert.deepStrictEqual(
        strReplaceAccentuation("ćǵḱĺḿńṕŕśẃýź"),
        "cgklmnprswyz",
    );
    assert.deepStrictEqual(strReplaceAccentuation("ĉĝĥĵŝŵŷẑ"), "cghjswyz");
    assert.deepStrictEqual(strReplaceAccentuation("čňřšž"), "cnrsz");
    assert.deepStrictEqual(strReplaceAccentuation("ḧẗẅẍÿ"), "htwxy");
    assert.deepStrictEqual(strReplaceAccentuation("ķļņț"), "klnt");
    assert.deepStrictEqual(strReplaceAccentuation("çḉşţ"), "ccst");
    assert.deepStrictEqual(strReplaceAccentuation("đħłŧ"), "dhlt");
    assert.deepStrictEqual(strReplaceAccentuation("ǹẁỳ"), "nwy");
    assert.deepStrictEqual(strReplaceAccentuation("ñṽỹ"), "nvy");
    assert.deepStrictEqual(strReplaceAccentuation("ďľť"), "dlt");
    assert.deepStrictEqual(strReplaceAccentuation("ȑ"), "r");
    assert.deepStrictEqual(strReplaceAccentuation("ģ"), "g");
    assert.deepStrictEqual(strReplaceAccentuation("ğ"), "g");
    assert.deepStrictEqual(strReplaceAccentuation("ż"), "z");
});

it("strReplaceAccentuation", () => {
    assert.deepStrictEqual(
        strReplaceAccentuation("ĆǴḰĹḾŃṔŔŚẂÝŹ"),
        "CGKLMNPRSWYZ",
    );
    assert.deepStrictEqual(strReplaceAccentuation("ĈĜĤĴŜŴŶẐ"), "CGHJSWYZ");
    assert.deepStrictEqual(strReplaceAccentuation("ČĎŇŘŠŤŽ"), "CDNRSTZ");
    assert.deepStrictEqual(strReplaceAccentuation("ḦẄẌŸ"), "HWXY");
    assert.deepStrictEqual(strReplaceAccentuation("ÇḈŞŢ"), "CCST");
    assert.deepStrictEqual(strReplaceAccentuation("ĐĦŁŦ"), "DHLT");
    assert.deepStrictEqual(strReplaceAccentuation("ǸẀỲ"), "NWY");
    assert.deepStrictEqual(strReplaceAccentuation("ÑṼỸ"), "NVY");
    assert.deepStrictEqual(strReplaceAccentuation("ĻŅȚ"), "LNT");
    assert.deepStrictEqual(strReplaceAccentuation("ĢĶ"), "GK");
    assert.deepStrictEqual(strReplaceAccentuation("Ȑ"), "R");
    assert.deepStrictEqual(strReplaceAccentuation("Ğ"), "G");
    assert.deepStrictEqual(strReplaceAccentuation("Ľ"), "L");
    assert.deepStrictEqual(strReplaceAccentuation("Ż"), "Z");
});

it("strReplaceAccentuation", () => {
    assert.deepStrictEqual(
        strReplaceAccentuation(
            "abcdefghijklmnopqrstuvwyxz0123456789",
        ),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assert.deepStrictEqual(
        strReplaceAccentuation(
            "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
        ),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assert.deepStrictEqual(
        strReplaceAccentuation(
            "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
        ),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});

it("strSnakeCase", () => {
    assert.deepStrictEqual(strSnakeCase(""), "");
});

it("strSnakeCase", () => {
    assert.deepStrictEqual(strSnakeCase("hey"), "hey");
});

it("strSnakeCase", () => {
    assert.deepStrictEqual(strSnakeCase("j S o N"), "j_s_o_n");
    assert.deepStrictEqual(strSnakeCase("j_S_o_N"), "j_s_o_n");
    assert.deepStrictEqual(strSnakeCase("j-S-o-N"), "j_s_o_n");
});

it("strSnakeCase", () => {
    assert.deepStrictEqual(strSnakeCase("hey Jo3"), "hey_jo3");
    assert.deepStrictEqual(strSnakeCase("hey_Jo3"), "hey_jo3");
    assert.deepStrictEqual(strSnakeCase("hey-Jo3"), "hey_jo3");
});
