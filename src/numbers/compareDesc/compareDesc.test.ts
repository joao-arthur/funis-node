import { describe, expect, it } from 'vitest';
import { compareDesc } from './compareDesc.js';

describe('compareDesc', () => {
    it('should compare the numbers in descending order', () => {
        expect(
            [1, 9, 2, 8, 3, 7, 4, 6, 5].sort(compareDesc),
        ).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});
