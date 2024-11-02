import { assert, it } from "vitest";
import {
    strCamelCase,
    strCompAsc,
    strCompDesc,
    strIsValid,
    strKebabCase,
    strPascalCase,
    strRandom,
    strRemoveAccents,
    strReplaceAccents,
    strSnakeCase,
} from "./string.js";

it("strIsValid", () => {
    assert.deepStrictEqual(strIsValid(undefined), false);
    assert.deepStrictEqual(strIsValid(null), false);
    assert.deepStrictEqual(strIsValid(""), true);
    assert.deepStrictEqual(strIsValid(" "), true);
    assert.deepStrictEqual(strIsValid("Lorem ipsum"), true);
});

it("strCompAsc", () => {
    assert.deepStrictEqual(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(strCompAsc),
        ["O", "P", "Q", "W", "o", "p", "q", "w"],
    );
});

it("strCompDesc", () => {
    assert.deepStrictEqual(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(strCompDesc),
        ["w", "q", "p", "o", "W", "Q", "P", "O"],
    );
});

it("strCamelCase", () => {
    assert.deepStrictEqual(strCamelCase(""), "");
    assert.deepStrictEqual(strCamelCase("hey"), "hey");
    assert.deepStrictEqual(strCamelCase("j S o N"), "jSON");
    assert.deepStrictEqual(strCamelCase("j_S_o_N"), "jSON");
    assert.deepStrictEqual(strCamelCase("j-S-o-N"), "jSON");
    assert.deepStrictEqual(strCamelCase("hey Jo3"), "heyJo3");
    assert.deepStrictEqual(strCamelCase("hey_Jo3"), "heyJo3");
    assert.deepStrictEqual(strCamelCase("hey-Jo3"), "heyJo3");
});

it("strKebabCase", () => {
    assert.deepStrictEqual(strKebabCase(""), "");
    assert.deepStrictEqual(strKebabCase("hey"), "hey");
    assert.deepStrictEqual(strKebabCase("j S o N"), "j-s-o-n");
    assert.deepStrictEqual(strKebabCase("j_S_o_N"), "j-s-o-n");
    assert.deepStrictEqual(strKebabCase("j-S-o-N"), "j-s-o-n");
    assert.deepStrictEqual(strKebabCase("hey Jo3"), "hey-jo3");
    assert.deepStrictEqual(strKebabCase("hey_Jo3"), "hey-jo3");
    assert.deepStrictEqual(strKebabCase("hey-Jo3"), "hey-jo3");
});

it("strPascalCase", () => {
    assert.deepStrictEqual(strPascalCase(""), "");
    assert.deepStrictEqual(strPascalCase("hey"), "Hey");
    assert.deepStrictEqual(strPascalCase("j S o N"), "JSON");
    assert.deepStrictEqual(strPascalCase("j_S_o_N"), "JSON");
    assert.deepStrictEqual(strPascalCase("j-S-o-N"), "JSON");
    assert.deepStrictEqual(strPascalCase("hey Jo3"), "HeyJo3");
    assert.deepStrictEqual(strPascalCase("hey_Jo3"), "HeyJo3");
    assert.deepStrictEqual(strPascalCase("hey-Jo3"), "HeyJo3");
});

it("strSnakeCase", () => {
    assert.deepStrictEqual(strSnakeCase(""), "");
    assert.deepStrictEqual(strSnakeCase("hey"), "hey");
    assert.deepStrictEqual(strSnakeCase("j S o N"), "j_s_o_n");
    assert.deepStrictEqual(strSnakeCase("j_S_o_N"), "j_s_o_n");
    assert.deepStrictEqual(strSnakeCase("j-S-o-N"), "j_s_o_n");
    assert.deepStrictEqual(strSnakeCase("hey Jo3"), "hey_jo3");
    assert.deepStrictEqual(strSnakeCase("hey_Jo3"), "hey_jo3");
    assert.deepStrictEqual(strSnakeCase("hey-Jo3"), "hey_jo3");
});

it("strRemoveAccents", () => {
    assert.deepStrictEqual(strRemoveAccents("áéíóú"), "");
    assert.deepStrictEqual(strRemoveAccents("àèìòù"), "");
    assert.deepStrictEqual(strRemoveAccents("ãẽĩõũ"), "");
    assert.deepStrictEqual(strRemoveAccents("äëïöü"), "");
    assert.deepStrictEqual(strRemoveAccents("âêîôû"), "");
    assert.deepStrictEqual(strRemoveAccents("ȁȅȉȍȕ"), "");
    assert.deepStrictEqual(strRemoveAccents("āēīōū"), "");
    assert.deepStrictEqual(strRemoveAccents("ăĕ"), "");
    assert.deepStrictEqual(strRemoveAccents("ęį"), "");
    assert.deepStrictEqual(strRemoveAccents("őű"), "");
    assert.deepStrictEqual(strRemoveAccents("åů"), "");
    assert.deepStrictEqual(strRemoveAccents("ė"), "");
    assert.deepStrictEqual(strRemoveAccents("ě"), "");
    assert.deepStrictEqual(strRemoveAccents("ø"), "");
    assert.deepStrictEqual(strRemoveAccents("ǘ"), "");
    assert.deepStrictEqual(strRemoveAccents("ǜ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÁÉÍÓÚ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÀÈÌÒÙ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÃẼĨÕŨ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÄËÏÖÜ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÂÊÎÔÛ"), "");
    assert.deepStrictEqual(strRemoveAccents("ȀȄȈȌȔ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĀĒĪŌŪ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĂĔ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĘĮ"), "");
    assert.deepStrictEqual(strRemoveAccents("ŐŰ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÅŮ"), "");
    assert.deepStrictEqual(strRemoveAccents("Ė"), "");
    assert.deepStrictEqual(strRemoveAccents("Ě"), "");
    assert.deepStrictEqual(strRemoveAccents("Ø"), "");
    assert.deepStrictEqual(strRemoveAccents("Ǘ"), "");
    assert.deepStrictEqual(strRemoveAccents("Ǜ"), "");
    assert.deepStrictEqual(strRemoveAccents("ćǵḱĺḿńṕŕśẃýź"), "");
    assert.deepStrictEqual(strRemoveAccents("ĉĝĥĵŝŵŷẑ"), "");
    assert.deepStrictEqual(strRemoveAccents("čňřšž"), "");
    assert.deepStrictEqual(strRemoveAccents("ḧẗẅẍÿ"), "");
    assert.deepStrictEqual(strRemoveAccents("ķļņț"), "");
    assert.deepStrictEqual(strRemoveAccents("çḉşţ"), "");
    assert.deepStrictEqual(strRemoveAccents("đħłŧ"), "");
    assert.deepStrictEqual(strRemoveAccents("ǹẁỳ"), "");
    assert.deepStrictEqual(strRemoveAccents("ñṽỹ"), "");
    assert.deepStrictEqual(strRemoveAccents("ďľť"), "");
    assert.deepStrictEqual(strRemoveAccents("ȑ"), "");
    assert.deepStrictEqual(strRemoveAccents("ģ"), "");
    assert.deepStrictEqual(strRemoveAccents("ğ"), "");
    assert.deepStrictEqual(strRemoveAccents("ż"), "");
    assert.deepStrictEqual(strRemoveAccents("ĆǴḰĹḾŃṔŔŚẂÝŹ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĈĜĤĴŜŴŶẐ"), "");
    assert.deepStrictEqual(strRemoveAccents("ČĎŇŘŠŤŽ"), "");
    assert.deepStrictEqual(strRemoveAccents("ḦẄẌŸ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÇḈŞŢ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĐĦŁŦ"), "");
    assert.deepStrictEqual(strRemoveAccents("ǸẀỲ"), "");
    assert.deepStrictEqual(strRemoveAccents("ÑṼỸ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĻŅȚ"), "");
    assert.deepStrictEqual(strRemoveAccents("ĢĶ"), "");
    assert.deepStrictEqual(strRemoveAccents("Ȑ"), "");
    assert.deepStrictEqual(strRemoveAccents("Ğ"), "");
    assert.deepStrictEqual(strRemoveAccents("Ľ"), "");
    assert.deepStrictEqual(strRemoveAccents("Ż"), "");
    assert.deepStrictEqual(
        strRemoveAccents("abcdefghijklmnopqrstuvwyxz0123456789"),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assert.deepStrictEqual(
        strRemoveAccents("ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assert.deepStrictEqual(
        strRemoveAccents("¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ"),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});

it("strReplaceAccents", () => {
    assert.deepStrictEqual(strReplaceAccents("áéíóú"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("àèìòù"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("ãẽĩõũ"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("äëïöü"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("âêîôû"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("ȁȅȉȍȕ"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("āēīōū"), "aeiou");
    assert.deepStrictEqual(strReplaceAccents("ăĕ"), "ae");
    assert.deepStrictEqual(strReplaceAccents("ęį"), "ei");
    assert.deepStrictEqual(strReplaceAccents("őű"), "ou");
    assert.deepStrictEqual(strReplaceAccents("åů"), "au");
    assert.deepStrictEqual(strReplaceAccents("ė"), "e");
    assert.deepStrictEqual(strReplaceAccents("ě"), "e");
    assert.deepStrictEqual(strReplaceAccents("ø"), "o");
    assert.deepStrictEqual(strReplaceAccents("ǘ"), "u");
    assert.deepStrictEqual(strReplaceAccents("ǜ"), "u");
    assert.deepStrictEqual(strReplaceAccents("ÁÉÍÓÚ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ÀÈÌÒÙ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ÃẼĨÕŨ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ÄËÏÖÜ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ÂÊÎÔÛ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ȀȄȈȌȔ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ĀĒĪŌŪ"), "AEIOU");
    assert.deepStrictEqual(strReplaceAccents("ĂĔ"), "AE");
    assert.deepStrictEqual(strReplaceAccents("ĘĮ"), "EI");
    assert.deepStrictEqual(strReplaceAccents("ŐŰ"), "OU");
    assert.deepStrictEqual(strReplaceAccents("ÅŮ"), "AU");
    assert.deepStrictEqual(strReplaceAccents("Ė"), "E");
    assert.deepStrictEqual(strReplaceAccents("Ě"), "E");
    assert.deepStrictEqual(strReplaceAccents("Ø"), "O");
    assert.deepStrictEqual(strReplaceAccents("Ǘ"), "U");
    assert.deepStrictEqual(strReplaceAccents("Ǜ"), "U");
    assert.deepStrictEqual(strReplaceAccents("ćǵḱĺḿńṕŕśẃýź"), "cgklmnprswyz");
    assert.deepStrictEqual(strReplaceAccents("ĉĝĥĵŝŵŷẑ"), "cghjswyz");
    assert.deepStrictEqual(strReplaceAccents("čňřšž"), "cnrsz");
    assert.deepStrictEqual(strReplaceAccents("ḧẗẅẍÿ"), "htwxy");
    assert.deepStrictEqual(strReplaceAccents("ķļņț"), "klnt");
    assert.deepStrictEqual(strReplaceAccents("çḉşţ"), "ccst");
    assert.deepStrictEqual(strReplaceAccents("đħłŧ"), "dhlt");
    assert.deepStrictEqual(strReplaceAccents("ǹẁỳ"), "nwy");
    assert.deepStrictEqual(strReplaceAccents("ñṽỹ"), "nvy");
    assert.deepStrictEqual(strReplaceAccents("ďľť"), "dlt");
    assert.deepStrictEqual(strReplaceAccents("ȑ"), "r");
    assert.deepStrictEqual(strReplaceAccents("ģ"), "g");
    assert.deepStrictEqual(strReplaceAccents("ğ"), "g");
    assert.deepStrictEqual(strReplaceAccents("ż"), "z");
    assert.deepStrictEqual(strReplaceAccents("ĆǴḰĹḾŃṔŔŚẂÝŹ"), "CGKLMNPRSWYZ");
    assert.deepStrictEqual(strReplaceAccents("ĈĜĤĴŜŴŶẐ"), "CGHJSWYZ");
    assert.deepStrictEqual(strReplaceAccents("ČĎŇŘŠŤŽ"), "CDNRSTZ");
    assert.deepStrictEqual(strReplaceAccents("ḦẄẌŸ"), "HWXY");
    assert.deepStrictEqual(strReplaceAccents("ÇḈŞŢ"), "CCST");
    assert.deepStrictEqual(strReplaceAccents("ĐĦŁŦ"), "DHLT");
    assert.deepStrictEqual(strReplaceAccents("ǸẀỲ"), "NWY");
    assert.deepStrictEqual(strReplaceAccents("ÑṼỸ"), "NVY");
    assert.deepStrictEqual(strReplaceAccents("ĻŅȚ"), "LNT");
    assert.deepStrictEqual(strReplaceAccents("ĢĶ"), "GK");
    assert.deepStrictEqual(strReplaceAccents("Ȑ"), "R");
    assert.deepStrictEqual(strReplaceAccents("Ğ"), "G");
    assert.deepStrictEqual(strReplaceAccents("Ľ"), "L");
    assert.deepStrictEqual(strReplaceAccents("Ż"), "Z");
    assert.deepStrictEqual(
        strReplaceAccents("abcdefghijklmnopqrstuvwyxz0123456789"),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assert.deepStrictEqual(
        strReplaceAccents("ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assert.deepStrictEqual(
        strReplaceAccents("¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ"),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});

it("strRandom", () => {
    assert.deepStrictEqual(strRandom(""), "");
    assert.deepStrictEqual(strRandom("a"), "a");
    assert.deepStrictEqual(strRandom("b"), "b");
    assert.deepStrictEqual(strRandom("c"), "c");
    assert.deepStrictEqual(strRandom("Botticelli").length, 1);
    assert.deepStrictEqual("Botticelli".includes(strRandom("Botticelli")), true);
    assert.deepStrictEqual(strRandom("Michelangelo").length, 1);
    assert.deepStrictEqual("Michelangelo".includes(strRandom("Michelangelo")), true);
});
