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

const assertEquals = assert.deepStrictEqual;

it("strIsValid", () => {
    assertEquals(strIsValid(undefined), false);
    assertEquals(strIsValid(null), false);
    assertEquals(strIsValid(""), true);
    assertEquals(strIsValid(" "), true);
    assertEquals(strIsValid("Lorem ipsum"), true);
});

it("strCompAsc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(strCompAsc),
        ["O", "P", "Q", "W", "o", "p", "q", "w"],
    );
});

it("strCompDesc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(strCompDesc),
        ["w", "q", "p", "o", "W", "Q", "P", "O"],
    );
});

it("strCamelCase", () => {
    assertEquals(strCamelCase(""), "");
    assertEquals(strCamelCase("hey"), "hey");
    assertEquals(strCamelCase("j S o N"), "jSON");
    assertEquals(strCamelCase("j_S_o_N"), "jSON");
    assertEquals(strCamelCase("j-S-o-N"), "jSON");
    assertEquals(strCamelCase("hey Jo3"), "heyJo3");
    assertEquals(strCamelCase("hey_Jo3"), "heyJo3");
    assertEquals(strCamelCase("hey-Jo3"), "heyJo3");
});

it("strKebabCase", () => {
    assertEquals(strKebabCase(""), "");
    assertEquals(strKebabCase("hey"), "hey");
    assertEquals(strKebabCase("j S o N"), "j-s-o-n");
    assertEquals(strKebabCase("j_S_o_N"), "j-s-o-n");
    assertEquals(strKebabCase("j-S-o-N"), "j-s-o-n");
    assertEquals(strKebabCase("hey Jo3"), "hey-jo3");
    assertEquals(strKebabCase("hey_Jo3"), "hey-jo3");
    assertEquals(strKebabCase("hey-Jo3"), "hey-jo3");
});

it("strPascalCase", () => {
    assertEquals(strPascalCase(""), "");
    assertEquals(strPascalCase("hey"), "Hey");
    assertEquals(strPascalCase("j S o N"), "JSON");
    assertEquals(strPascalCase("j_S_o_N"), "JSON");
    assertEquals(strPascalCase("j-S-o-N"), "JSON");
    assertEquals(strPascalCase("hey Jo3"), "HeyJo3");
    assertEquals(strPascalCase("hey_Jo3"), "HeyJo3");
    assertEquals(strPascalCase("hey-Jo3"), "HeyJo3");
});

it("strSnakeCase", () => {
    assertEquals(strSnakeCase(""), "");
    assertEquals(strSnakeCase("hey"), "hey");
    assertEquals(strSnakeCase("j S o N"), "j_s_o_n");
    assertEquals(strSnakeCase("j_S_o_N"), "j_s_o_n");
    assertEquals(strSnakeCase("j-S-o-N"), "j_s_o_n");
    assertEquals(strSnakeCase("hey Jo3"), "hey_jo3");
    assertEquals(strSnakeCase("hey_Jo3"), "hey_jo3");
    assertEquals(strSnakeCase("hey-Jo3"), "hey_jo3");
});

it("strRemoveAccents", () => {
    assertEquals(strRemoveAccents("áéíóú"), "");
    assertEquals(strRemoveAccents("àèìòù"), "");
    assertEquals(strRemoveAccents("ãẽĩõũ"), "");
    assertEquals(strRemoveAccents("äëïöü"), "");
    assertEquals(strRemoveAccents("âêîôû"), "");
    assertEquals(strRemoveAccents("ȁȅȉȍȕ"), "");
    assertEquals(strRemoveAccents("āēīōū"), "");
    assertEquals(strRemoveAccents("ăĕ"), "");
    assertEquals(strRemoveAccents("ęį"), "");
    assertEquals(strRemoveAccents("őű"), "");
    assertEquals(strRemoveAccents("åů"), "");
    assertEquals(strRemoveAccents("ė"), "");
    assertEquals(strRemoveAccents("ě"), "");
    assertEquals(strRemoveAccents("ø"), "");
    assertEquals(strRemoveAccents("ǘ"), "");
    assertEquals(strRemoveAccents("ǜ"), "");
    assertEquals(strRemoveAccents("ÁÉÍÓÚ"), "");
    assertEquals(strRemoveAccents("ÀÈÌÒÙ"), "");
    assertEquals(strRemoveAccents("ÃẼĨÕŨ"), "");
    assertEquals(strRemoveAccents("ÄËÏÖÜ"), "");
    assertEquals(strRemoveAccents("ÂÊÎÔÛ"), "");
    assertEquals(strRemoveAccents("ȀȄȈȌȔ"), "");
    assertEquals(strRemoveAccents("ĀĒĪŌŪ"), "");
    assertEquals(strRemoveAccents("ĂĔ"), "");
    assertEquals(strRemoveAccents("ĘĮ"), "");
    assertEquals(strRemoveAccents("ŐŰ"), "");
    assertEquals(strRemoveAccents("ÅŮ"), "");
    assertEquals(strRemoveAccents("Ė"), "");
    assertEquals(strRemoveAccents("Ě"), "");
    assertEquals(strRemoveAccents("Ø"), "");
    assertEquals(strRemoveAccents("Ǘ"), "");
    assertEquals(strRemoveAccents("Ǜ"), "");
    assertEquals(strRemoveAccents("ćǵḱĺḿńṕŕśẃýź"), "");
    assertEquals(strRemoveAccents("ĉĝĥĵŝŵŷẑ"), "");
    assertEquals(strRemoveAccents("čňřšž"), "");
    assertEquals(strRemoveAccents("ḧẗẅẍÿ"), "");
    assertEquals(strRemoveAccents("ķļņț"), "");
    assertEquals(strRemoveAccents("çḉşţ"), "");
    assertEquals(strRemoveAccents("đħłŧ"), "");
    assertEquals(strRemoveAccents("ǹẁỳ"), "");
    assertEquals(strRemoveAccents("ñṽỹ"), "");
    assertEquals(strRemoveAccents("ďľť"), "");
    assertEquals(strRemoveAccents("ȑ"), "");
    assertEquals(strRemoveAccents("ģ"), "");
    assertEquals(strRemoveAccents("ğ"), "");
    assertEquals(strRemoveAccents("ż"), "");
    assertEquals(strRemoveAccents("ĆǴḰĹḾŃṔŔŚẂÝŹ"), "");
    assertEquals(strRemoveAccents("ĈĜĤĴŜŴŶẐ"), "");
    assertEquals(strRemoveAccents("ČĎŇŘŠŤŽ"), "");
    assertEquals(strRemoveAccents("ḦẄẌŸ"), "");
    assertEquals(strRemoveAccents("ÇḈŞŢ"), "");
    assertEquals(strRemoveAccents("ĐĦŁŦ"), "");
    assertEquals(strRemoveAccents("ǸẀỲ"), "");
    assertEquals(strRemoveAccents("ÑṼỸ"), "");
    assertEquals(strRemoveAccents("ĻŅȚ"), "");
    assertEquals(strRemoveAccents("ĢĶ"), "");
    assertEquals(strRemoveAccents("Ȑ"), "");
    assertEquals(strRemoveAccents("Ğ"), "");
    assertEquals(strRemoveAccents("Ľ"), "");
    assertEquals(strRemoveAccents("Ż"), "");
    assertEquals(
        strRemoveAccents("abcdefghijklmnopqrstuvwyxz0123456789"),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assertEquals(
        strRemoveAccents("ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assertEquals(
        strRemoveAccents("¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ"),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});

it("strReplaceAccents", () => {
    assertEquals(strReplaceAccents("áéíóú"), "aeiou");
    assertEquals(strReplaceAccents("àèìòù"), "aeiou");
    assertEquals(strReplaceAccents("ãẽĩõũ"), "aeiou");
    assertEquals(strReplaceAccents("äëïöü"), "aeiou");
    assertEquals(strReplaceAccents("âêîôû"), "aeiou");
    assertEquals(strReplaceAccents("ȁȅȉȍȕ"), "aeiou");
    assertEquals(strReplaceAccents("āēīōū"), "aeiou");
    assertEquals(strReplaceAccents("ăĕ"), "ae");
    assertEquals(strReplaceAccents("ęį"), "ei");
    assertEquals(strReplaceAccents("őű"), "ou");
    assertEquals(strReplaceAccents("åů"), "au");
    assertEquals(strReplaceAccents("ė"), "e");
    assertEquals(strReplaceAccents("ě"), "e");
    assertEquals(strReplaceAccents("ø"), "o");
    assertEquals(strReplaceAccents("ǘ"), "u");
    assertEquals(strReplaceAccents("ǜ"), "u");
    assertEquals(strReplaceAccents("ÁÉÍÓÚ"), "AEIOU");
    assertEquals(strReplaceAccents("ÀÈÌÒÙ"), "AEIOU");
    assertEquals(strReplaceAccents("ÃẼĨÕŨ"), "AEIOU");
    assertEquals(strReplaceAccents("ÄËÏÖÜ"), "AEIOU");
    assertEquals(strReplaceAccents("ÂÊÎÔÛ"), "AEIOU");
    assertEquals(strReplaceAccents("ȀȄȈȌȔ"), "AEIOU");
    assertEquals(strReplaceAccents("ĀĒĪŌŪ"), "AEIOU");
    assertEquals(strReplaceAccents("ĂĔ"), "AE");
    assertEquals(strReplaceAccents("ĘĮ"), "EI");
    assertEquals(strReplaceAccents("ŐŰ"), "OU");
    assertEquals(strReplaceAccents("ÅŮ"), "AU");
    assertEquals(strReplaceAccents("Ė"), "E");
    assertEquals(strReplaceAccents("Ě"), "E");
    assertEquals(strReplaceAccents("Ø"), "O");
    assertEquals(strReplaceAccents("Ǘ"), "U");
    assertEquals(strReplaceAccents("Ǜ"), "U");
    assertEquals(strReplaceAccents("ćǵḱĺḿńṕŕśẃýź"), "cgklmnprswyz");
    assertEquals(strReplaceAccents("ĉĝĥĵŝŵŷẑ"), "cghjswyz");
    assertEquals(strReplaceAccents("čňřšž"), "cnrsz");
    assertEquals(strReplaceAccents("ḧẗẅẍÿ"), "htwxy");
    assertEquals(strReplaceAccents("ķļņț"), "klnt");
    assertEquals(strReplaceAccents("çḉşţ"), "ccst");
    assertEquals(strReplaceAccents("đħłŧ"), "dhlt");
    assertEquals(strReplaceAccents("ǹẁỳ"), "nwy");
    assertEquals(strReplaceAccents("ñṽỹ"), "nvy");
    assertEquals(strReplaceAccents("ďľť"), "dlt");
    assertEquals(strReplaceAccents("ȑ"), "r");
    assertEquals(strReplaceAccents("ģ"), "g");
    assertEquals(strReplaceAccents("ğ"), "g");
    assertEquals(strReplaceAccents("ż"), "z");
    assertEquals(strReplaceAccents("ĆǴḰĹḾŃṔŔŚẂÝŹ"), "CGKLMNPRSWYZ");
    assertEquals(strReplaceAccents("ĈĜĤĴŜŴŶẐ"), "CGHJSWYZ");
    assertEquals(strReplaceAccents("ČĎŇŘŠŤŽ"), "CDNRSTZ");
    assertEquals(strReplaceAccents("ḦẄẌŸ"), "HWXY");
    assertEquals(strReplaceAccents("ÇḈŞŢ"), "CCST");
    assertEquals(strReplaceAccents("ĐĦŁŦ"), "DHLT");
    assertEquals(strReplaceAccents("ǸẀỲ"), "NWY");
    assertEquals(strReplaceAccents("ÑṼỸ"), "NVY");
    assertEquals(strReplaceAccents("ĻŅȚ"), "LNT");
    assertEquals(strReplaceAccents("ĢĶ"), "GK");
    assertEquals(strReplaceAccents("Ȑ"), "R");
    assertEquals(strReplaceAccents("Ğ"), "G");
    assertEquals(strReplaceAccents("Ľ"), "L");
    assertEquals(strReplaceAccents("Ż"), "Z");
    assertEquals(
        strReplaceAccents("abcdefghijklmnopqrstuvwyxz0123456789"),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assertEquals(
        strReplaceAccents("ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assertEquals(
        strReplaceAccents("¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ"),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});

it("strRandom", () => {
    assertEquals(strRandom(""), "");
    assertEquals(strRandom("a"), "a");
    assertEquals(strRandom("b"), "b");
    assertEquals(strRandom("c"), "c");
    assertEquals(strRandom("Botticelli").length, 1);
    assertEquals("Botticelli".includes(strRandom("Botticelli")), true);
    assertEquals(strRandom("Michelangelo").length, 1);
    assertEquals("Michelangelo".includes(strRandom("Michelangelo")), true);
});
