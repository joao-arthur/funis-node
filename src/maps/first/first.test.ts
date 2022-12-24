import { describe, expect, it } from 'vitest';
import { first } from './first.js';

describe('first', () => {
    it('should return the first item of the map', () => {
        expect(first(new Map([
            [1, { name: 'Paul McCartney' }],
            [2, { name: 'John Lennon' }],
        ]))).toEqual([1, { name: 'Paul McCartney' }]);
        expect(first(new Map([
            ['RF', { birthday: '1834-10-01T11:18:35.000Z' }],
            ['FJW', { birthday: '2022-11-13T22:55:55.036Z' }],
        ]))).toEqual(['RF', { birthday: '1834-10-01T11:18:35.000Z' }]);
    });

    it('should return undefined for empty maps', () => {
        expect(first(new Map())).toBe(undefined);
    });
});
