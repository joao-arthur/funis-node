import { describe, it, expect } from 'vitest';
import { last } from './last';

describe('last', () => {
    it('should return the last item of the array', () => {
        expect(last([4, 5, 6])).toBe(6);
        expect(last(['George', 'Paul', 'John', 'Ringo'])).toBe('Ringo');
        expect(last([false, true])).toBe(true);
    });

    it('should return undefined for empty arrays', () => {
        expect(last([])).toBe(undefined);
    });
});
