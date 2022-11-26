import { describe, expect, it } from 'vitest';
import { clamp } from './clamp';

describe('clamp', () => {
    it('should clamp the number between min and max', () => {
        expect(clamp(10, 10, 10)).toBe(10);
        expect(clamp(10, 8, 12)).toBe(10);
        expect(clamp(10, 0, 9)).toBe(9);
        expect(clamp(10, 20, 100)).toBe(20);
        expect(clamp(10, -100, -1)).toBe(-1);
    });

    it('should clamp the number when it it the max', () => {
        expect(clamp(5, -1, 5)).toBe(5);
    });

    it('should clamp the number when it it the min', () => {
        expect(clamp(-1, -1, 5)).toBe(-1);
    });
});
