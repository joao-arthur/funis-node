import { describe, expect, it } from "vitest";
import { plainObject } from "../../types/plainObject.js";
import { serializesToSame } from "./serializesToSame.js";

describe("serializesToSame", () => {
    it("should return true for arrays with less than two items", () => {
        expect(serializesToSame([])).toBe(true);
        expect(serializesToSame([{ r: 10, a: 57 }])).toBe(true);
    });

    it("should return whether the plain values serializes to the same or not", () => {
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

    it("should return whether the class instances serializes to the same or not", () => {
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
});
