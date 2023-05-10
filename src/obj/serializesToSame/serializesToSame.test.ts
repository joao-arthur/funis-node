import { expect, it } from "vitest";
import { plainObject } from "../../types/plainObject.js";
import { serializesToSame } from "./serializesToSame.js";

it("serializesToSame", () => {
    expect(serializesToSame([])).toBe(true);
    expect(serializesToSame([{ r: 10, a: 57 }])).toBe(true);
});

it("serializesToSame", () => {
    expect(serializesToSame([
        { x: 10.12, y: -1.53 },
        { x: 10.12, y: -1.53 },
    ])).toBe(true);
    expect(serializesToSame([
        { x: 10.9, y: -1.5 },
        { x: 10.12, y: -1.53 },
    ])).toBe(false);
    expect(serializesToSame([{}, {}, {}])).toBe(true);
});

it("serializesToSame", () => {
    class CartesianPoint {
        constructor(
            private readonly x: number,
            private readonly y: number,
        ) {}

        public serialize(): string {
            return `(${this.x}, ${this.y})`;
        }
    }

    expect(serializesToSame([
        new CartesianPoint(5.25, 7.77) as unknown as plainObject,
        { x: 5.25, y: 7.77 },
    ])).toBe(true);
});
