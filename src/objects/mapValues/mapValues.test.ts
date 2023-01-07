import { describe, expect, it } from 'vitest';
import { mapValues } from './mapValues.js';

describe('mapValues', () => {
    it('should map the values into an object', () => {
        expect(
            mapValues(
                {
                    a: 1,
                    b: 'two',
                    c: true,
                    4: 'nada',
                },
                value => value,
            ),
        ).toEqual({
            a: 1,
            b: 'two',
            c: true,
            4: 'nada',
        });
        expect(
            mapValues(
                {
                    a: 1,
                    b: 'two',
                    c: true,
                    4: 'nada',
                },
                value => value === true,
            ),
        ).toEqual({
            a: false,
            b: false,
            c: true,
            4: false,
        });
        expect(
            mapValues(
                {
                    a: 1,
                    b: 'two',
                    c: true,
                    4: 'nada',
                },
                value => `v2_${value}_test`,
            ),
        ).toEqual({
            a: 'v2_1_test',
            b: 'v2_two_test',
            c: 'v2_true_test',
            4: 'v2_nada_test',
        });
        expect(
            mapValues(
                {
                    a: 1,
                    b: 'two',
                    c: true,
                    4: 'nada',
                },
                () => 'value',
            ),
        ).toEqual({
            a: 'value',
            b: 'value',
            c: 'value',
            4: 'value',
        });
    });
});
