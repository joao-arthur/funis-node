import { describe, expect, it } from 'vitest';
import { entries } from './entries.js';

describe('entries', () => {
    it('should return the entries of the map', () => {
        expect(entries(new Map())).toEqual([]);
        expect(entries(new Map([
            [1, { name: 'Paul McCartney' }],
            [2, { name: 'George Harrison' }],
        ]))).toEqual([
            [1, { name: 'Paul McCartney' }],
            [2, { name: 'George Harrison' }],
        ]);
    });
});
