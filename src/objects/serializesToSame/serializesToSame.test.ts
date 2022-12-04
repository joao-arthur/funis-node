import { describe, expect, it } from 'vitest';
import { plainObject } from '../../types/plainObject.js';
import { serializesToSame } from './serializesToSame.js';

describe('serializesToSame', () => {
    it('should return if the plain values serializes to the same', () => {
        expect(serializesToSame(
            { x: 10.12, y: -1.53 },
            { x: 10.12, y: -1.53 },
        )).toBe(true);
        expect(serializesToSame(
            { x: 10.9, y: -1.5 },
            { x: 10.12, y: -1.53 },
        )).toBe(false);
    });

    it('should return if the class instances serializes to the same', () => {
        class CartesianPoint {
            constructor(private readonly x: number, private readonly y: number) { }
        }

        expect(serializesToSame(
            new CartesianPoint(5.25, 7.77) as unknown as plainObject,
            { x: 5.25, y: 7.77 },
        )).toBe(true);
    });
});
