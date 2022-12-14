import { describe, it, expect } from 'vitest';
import { first } from './first.js';

describe('first', () => {
    it('should return the first item of the array', () => {
        expect(first([4, 5, 6])).toBe(4);
        expect(
            first(['George', 'Paul', 'John', 'Ringo']),
        ).toBe('George');
        expect(first([false, true])).toBe(false);
    });

    it('should return undefined for empty arrays', () => {
        expect(first([])).toBe(undefined);
    });
});
