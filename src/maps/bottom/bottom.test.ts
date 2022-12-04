import { describe, expect, it } from 'vitest';
import { bottom } from './bottom.js';

describe('bottom', () => {
    it('should return the values of the map in an array', () => {
        expect(bottom(new Map())).toEqual(undefined);
        expect(bottom(new Map([
            [1, { name: 'Paul McCartney' }],
            [2, { name: 'John Lennon' }],
        ]))).toEqual({ key: 1, value: { name: 'Paul McCartney' } });
        expect(bottom(new Map([
            ['RF', { birthday: '1834-10-01T11:18:35.000Z' }],
            ['FJW', { birthday: '2022-11-13T22:55:55.036Z' }],
        ]))).toEqual({ key: 'RF', value: { birthday: '1834-10-01T11:18:35.000Z' } });
    });
});
