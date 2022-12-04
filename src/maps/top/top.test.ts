import { describe, expect, it } from 'vitest';
import { top } from './top.js';

describe('top', () => {
    it('should return the last item of the map', () => {
        expect(top(new Map([
            [1, { name: 'Paul McCartney' }],
            [2, { name: 'John Lennon' }],
        ]))).toEqual({ key: 2, value: { name: 'John Lennon' } });
        expect(top(new Map([
            ['RF', { birthday: '1834-10-01T11:18:35.000Z' }],
            ['FJW', { birthday: '2022-11-13T22:55:55.036Z' }],
        ]))).toEqual({ key: 'FJW', value: { birthday: '2022-11-13T22:55:55.036Z' } });
    });

    it('should return undefined for empty maps', () => {
        expect(top(new Map())).toBe(undefined);
    });
});
