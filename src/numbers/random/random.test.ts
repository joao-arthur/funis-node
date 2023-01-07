import { describe, expect, it } from 'vitest';
import { random } from './random.js';

describe('random', () => {
    it('should return the value for no range', () => {
        expect(random(0, 0)).toBe(0);
        expect(random(5, 5)).toBe(5);
        expect(random(10, 10)).toBe(10);
    });

    it('should return a random value in range', () => {
        for (let i = 0; i < 10; i++) {
            expect(random(0, 10)).toBeGreaterThanOrEqual(0);
            expect(random(0, 10)).toBeLessThanOrEqual(10);
        }
        for (let i = 0; i < 10; i++) {
            expect(random(0, -10)).toBeLessThanOrEqual(0);
            expect(random(0, -10)).toBeGreaterThanOrEqual(-10);
        }
        for (let i = 0; i < 10; i++) {
            expect(random(30, 90)).toBeGreaterThanOrEqual(30);
            expect(random(30, 90)).toBeLessThanOrEqual(90);
        }
        for (let i = 0; i < 10; i++) {
            expect(random(30, -90)).toBeLessThanOrEqual(30);
            expect(random(30, -90)).toBeGreaterThanOrEqual(-90);
        }
        for (let i = 0; i < 10; i++) {
            expect(random(-10, 10)).toBeGreaterThanOrEqual(-10);
            expect(random(-10, 10)).toBeLessThanOrEqual(10);
        }
        for (let i = 0; i < 10; i++) {
            expect(random(10, -10)).toBeLessThanOrEqual(10);
            expect(random(10, -10)).toBeGreaterThanOrEqual(-10);
        }
    });
});
