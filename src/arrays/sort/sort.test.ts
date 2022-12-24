import { describe, expect, it } from 'vitest';
import { sort } from './sort.js';

describe('sort', () => {
    it('should return a new sorted array without modifing the old one', () => {
        const original = [9, 1, true, 'olá mundo'];
        const sorted = sort(original);

        expect(original).toEqual([9, 1, true, 'olá mundo']);
        expect(sorted).toEqual([1, 9, 'olá mundo', true]);
    });

    it('should apply the sort function', () => {
        expect(
            sort([1, 9, 2, 8, 3, 7, 4, 6, 5], (a, b) => a - b),
        ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(
            sort([1, 9, 2, 8, 3, 7, 4, 6, 5], (a, b) => b - a),
        ).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
        expect(
            sort([1, 9, 2, 8, 3, 7, 4, 6, 5], () => 0),
        ).toEqual([1, 9, 2, 8, 3, 7, 4, 6, 5]);
        expect(
            sort([1, 9, 2, 8, 3, 7, 4, 6, 5], () => 0),
        ).toEqual([1, 9, 2, 8, 3, 7, 4, 6, 5]);
    });
});
