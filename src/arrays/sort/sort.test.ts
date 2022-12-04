import { describe, expect, it } from 'vitest';
import { sort } from './sort.js';

describe('sort', () => {
    it('should return a new sorted array', () => {
        const original = [9, 1, true, 'olá mundo'];
        const sorted = sort(original);

        expect(original).toEqual([9, 1, true, 'olá mundo']);
        expect(sorted).toEqual([1, 9, 'olá mundo', true]);
    });
});
