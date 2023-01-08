import { describe, expect, it } from 'vitest';
import { compareAsc } from './compareAsc.js';

describe('compareAsc', () => {
    it('should compare the numbers in ascending order', () => {
        expect(
            [1, 9, 2, 8, 3, 7, 4, 6, 5].sort(compareAsc),
        ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
