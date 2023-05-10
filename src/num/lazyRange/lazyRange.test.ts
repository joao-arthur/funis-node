import { expect, it } from "vitest";
import { lazyRange } from "./lazyRange.js";

it("lazyRange", () => {
    const itter = lazyRange(-1, 2);
    expect(itter.next()).toEqual({ done: false, value: -1 });
    expect(itter.next()).toEqual({ done: false, value: 0 });
    expect(itter.next()).toEqual({ done: false, value: 1 });
    expect(itter.next()).toEqual({ done: false, value: 2 });
    expect(itter.next()).toEqual({ done: true, value: undefined });
});

it("lazyRange", () => {
    const itter = lazyRange(2, 5.3, 0.5);
    expect(itter.next()).toEqual({ done: false, value: 2 });
    expect(itter.next()).toEqual({ done: false, value: 2.5 });
    expect(itter.next()).toEqual({ done: false, value: 3 });
    expect(itter.next()).toEqual({ done: false, value: 3.5 });
    expect(itter.next()).toEqual({ done: false, value: 4 });
    expect(itter.next()).toEqual({ done: false, value: 4.5 });
    expect(itter.next()).toEqual({ done: false, value: 5 });
    expect(itter.next()).toEqual({ done: true, value: undefined });
});

it("lazyRange", () => {
    const itter = lazyRange(-1, 2);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    expect(values).toEqual([-1, 0, 1, 2]);
});

it("lazyRange", () => {
    const itter = lazyRange(2, -1);
    expect(itter.next()).toEqual({ done: true, value: undefined });
});

it("lazyRange", () => {
    const itter = lazyRange(2, -1);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    expect(values).toEqual([]);
});

it("lazyRange", () => {
    const itter = lazyRange(2, 5.3, 0.5);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    expect(values).toEqual([2, 2.5, 3, 3.5, 4, 4.5, 5]);
});
