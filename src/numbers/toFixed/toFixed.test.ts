import { expect, it } from "vitest";
import { toFixed } from "./toFixed.js";

it("toFixed", () => {
    expect(toFixed(0, 0)).toBe(0);
    expect(toFixed(3, 0)).toBe(3);
    expect(toFixed(0.2, 0)).toBe(0);
    expect(toFixed(0.4, 0)).toBe(0);
    expect(toFixed(1.1, 0)).toBe(1);
    expect(toFixed(9.9999, 0)).toBe(10);
    expect(toFixed(10.10101, 0)).toBe(10);
});

it("toFixed", () => {
    expect(toFixed(0, 1)).toBe(0);
    expect(toFixed(3, 1)).toBe(3);
    expect(toFixed(0.2, 1)).toBe(0.2);
    expect(toFixed(0.4, 1)).toBe(0.4);
    expect(toFixed(1.1, 1)).toBe(1.1);
    expect(toFixed(9.9999, 1)).toBe(10);
    expect(toFixed(10.10101, 1)).toBe(10.1);
});

it("toFixed", () => {
    expect(toFixed(0, 2)).toBe(0);
    expect(toFixed(3, 2)).toBe(3);
    expect(toFixed(0.2, 2)).toBe(0.2);
    expect(toFixed(0.4, 2)).toBe(0.4);
    expect(toFixed(1.1, 2)).toBe(1.1);
    expect(toFixed(9.9999, 2)).toBe(10);
    expect(toFixed(10.10101, 2)).toBe(10.1);
});

it("toFixed", () => {
    expect(toFixed(0, 3)).toBe(0);
    expect(toFixed(3, 3)).toBe(3);
    expect(toFixed(0.2, 3)).toBe(0.2);
    expect(toFixed(0.4, 3)).toBe(0.4);
    expect(toFixed(1.1, 3)).toBe(1.1);
    expect(toFixed(9.9999, 3)).toBe(10);
    expect(toFixed(10.10101, 3)).toBe(10.101);
});

it("toFixed", () => {
    expect(toFixed(0, 4)).toBe(0);
    expect(toFixed(3, 4)).toBe(3);
    expect(toFixed(0.2, 4)).toBe(0.2);
    expect(toFixed(0.4, 4)).toBe(0.4);
    expect(toFixed(1.1, 4)).toBe(1.1);
    expect(toFixed(9.9999, 4)).toBe(9.9999);
    expect(toFixed(10.10101, 4)).toBe(10.101);
});

it("toFixed", () => {
    expect(toFixed(9.9999999999, 10)).toBe(9.9999999999);
});
