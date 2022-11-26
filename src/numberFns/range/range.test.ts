import { describe, expect, it } from 'vitest';
import { range } from './range';

describe('range', () => {
    it('should return a range of numbers inclusively', () => {
        expect(range(-1, 2)).toEqual([-1, 0, 1, 2]);
        expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(range(4, 5)).toEqual([4, 5]);
    });

    it('should return empty array when min is greater than max', () => {
        expect(range(2, -1)).toEqual([]);
        expect(range(10, 0)).toEqual([]);
        expect(range(5, 4)).toEqual([]);
    });
});
