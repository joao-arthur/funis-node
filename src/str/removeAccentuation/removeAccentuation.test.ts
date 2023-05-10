import { expect, it } from "vitest";
import { removeAccentuation } from "./removeAccentuation.js";

it("removeAccentuation", () => {
    expect(removeAccentuation("áéíóú")).toBe("");
    expect(removeAccentuation("àèìòù")).toBe("");
    expect(removeAccentuation("ãẽĩõũ")).toBe("");
    expect(removeAccentuation("äëïöü")).toBe("");
    expect(removeAccentuation("âêîôû")).toBe("");
    expect(removeAccentuation("ȁȅȉȍȕ")).toBe("");
    expect(removeAccentuation("āēīōū")).toBe("");
    expect(removeAccentuation("ăĕ")).toBe("");
    expect(removeAccentuation("ęį")).toBe("");
    expect(removeAccentuation("őű")).toBe("");
    expect(removeAccentuation("åů")).toBe("");
    expect(removeAccentuation("ė")).toBe("");
    expect(removeAccentuation("ě")).toBe("");
    expect(removeAccentuation("ø")).toBe("");
    expect(removeAccentuation("ǘ")).toBe("");
    expect(removeAccentuation("ǜ")).toBe("");
});

it("removeAccentuation", () => {
    expect(removeAccentuation("ÁÉÍÓÚ")).toBe("");
    expect(removeAccentuation("ÀÈÌÒÙ")).toBe("");
    expect(removeAccentuation("ÃẼĨÕŨ")).toBe("");
    expect(removeAccentuation("ÄËÏÖÜ")).toBe("");
    expect(removeAccentuation("ÂÊÎÔÛ")).toBe("");
    expect(removeAccentuation("ȀȄȈȌȔ")).toBe("");
    expect(removeAccentuation("ĀĒĪŌŪ")).toBe("");
    expect(removeAccentuation("ĂĔ")).toBe("");
    expect(removeAccentuation("ĘĮ")).toBe("");
    expect(removeAccentuation("ŐŰ")).toBe("");
    expect(removeAccentuation("ÅŮ")).toBe("");
    expect(removeAccentuation("Ė")).toBe("");
    expect(removeAccentuation("Ě")).toBe("");
    expect(removeAccentuation("Ø")).toBe("");
    expect(removeAccentuation("Ǘ")).toBe("");
    expect(removeAccentuation("Ǜ")).toBe("");
});

it("removeAccentuation", () => {
    expect(removeAccentuation("ćǵḱĺḿńṕŕśẃýź")).toBe("");
    expect(removeAccentuation("ĉĝĥĵŝŵŷẑ")).toBe("");
    expect(removeAccentuation("čňřšž")).toBe("");
    expect(removeAccentuation("ḧẗẅẍÿ")).toBe("");
    expect(removeAccentuation("ķļņț")).toBe("");
    expect(removeAccentuation("çḉşţ")).toBe("");
    expect(removeAccentuation("đħłŧ")).toBe("");
    expect(removeAccentuation("ǹẁỳ")).toBe("");
    expect(removeAccentuation("ñṽỹ")).toBe("");
    expect(removeAccentuation("ďľť")).toBe("");
    expect(removeAccentuation("ȑ")).toBe("");
    expect(removeAccentuation("ģ")).toBe("");
    expect(removeAccentuation("ğ")).toBe("");
    expect(removeAccentuation("ż")).toBe("");
});

it("removeAccentuation", () => {
    expect(removeAccentuation("ĆǴḰĹḾŃṔŔŚẂÝŹ")).toBe("");
    expect(removeAccentuation("ĈĜĤĴŜŴŶẐ")).toBe("");
    expect(removeAccentuation("ČĎŇŘŠŤŽ")).toBe("");
    expect(removeAccentuation("ḦẄẌŸ")).toBe("");
    expect(removeAccentuation("ÇḈŞŢ")).toBe("");
    expect(removeAccentuation("ĐĦŁŦ")).toBe("");
    expect(removeAccentuation("ǸẀỲ")).toBe("");
    expect(removeAccentuation("ÑṼỸ")).toBe("");
    expect(removeAccentuation("ĻŅȚ")).toBe("");
    expect(removeAccentuation("ĢĶ")).toBe("");
    expect(removeAccentuation("Ȑ")).toBe("");
    expect(removeAccentuation("Ğ")).toBe("");
    expect(removeAccentuation("Ľ")).toBe("");
    expect(removeAccentuation("Ż")).toBe("");
});

it("removeAccentuation", () => {
    expect(
        removeAccentuation(
            "abcdefghijklmnopqrstuvwyxz0123456789",
        ),
    ).toBe("abcdefghijklmnopqrstuvwyxz0123456789");
    expect(
        removeAccentuation(
            "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
        ),
    ).toBe(
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    expect(
        removeAccentuation(
            "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
        ),
    ).toBe(
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});
