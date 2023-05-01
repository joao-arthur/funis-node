import { expect, it } from "vitest";
import { clamp } from "./clamp.js";

it("clamp", () => {
    expect(clamp(10, { min: 8, max: 12 })).toBe(10);
    expect(clamp(10, { min: 0, max: 9 })).toBe(9);
    expect(clamp(10, { min: 20, max: 100 })).toBe(20);
    expect(clamp(10, { min: -100, max: -1 })).toBe(-1);
});

it("clamp", () => {
    expect(clamp(-1, { min: -1, max: -1 })).toBe(-1);
    expect(clamp(10, { min: 10, max: 10 })).toBe(10);
});

it("clamp", () => {
    expect(clamp(5, { min: -1, max: 5 })).toBe(5);
    expect(clamp(12, { min: 8, max: 12 })).toBe(12);
});

it("clamp", () => {
    expect(clamp(-1, { min: -1, max: 5 })).toBe(-1);
    expect(clamp(8, { min: 8, max: 12 })).toBe(8);
});

it("clamp", () => {
    expect(clamp(-1, { min: -1, max: 5 })).toBe(-1);
    expect(clamp(8, { min: 8, max: 12 })).toBe(8);
});

it("clamp", () => {
    expect(clamp(77, { min: 99 })).toBe(99);
    expect(clamp(10, { min: 8 })).toBe(10);
});

it("clamp", () => {
    expect(clamp(-10, { max: 5 })).toBe(-10);
    expect(clamp(846, { max: -1 })).toBe(-1);
});
