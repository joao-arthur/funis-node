import { describe, it, expect } from 'vitest';
import { disjoint } from './disjoint.js';

describe('disjoint', () => {
    it('should return empty for equal arrays', () => {
        expect(disjoint([[1, 2, 3], [1, 2, 3]])).toEqual([]);
    });

    it('should return the items not present more than once', () => {
        expect(disjoint([[1]])).toEqual([1]);
        expect(disjoint([[4, 5, 6], [5, 6, 7]])).toEqual([4, 7]);
        expect(disjoint([
            ['George', 'Paul', 'John', 'Ringo'],
            ['Ringo'],
            ['John'],
        ])).toEqual(['George', 'Paul']);
        expect(disjoint([[false, true], []])).toEqual([false, true]);
    });
});
