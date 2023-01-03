import { describe, expect, it } from 'vitest';
import { mapValues } from './mapValues.js';

describe('mapValues', () => {
    it('should map the values into a new Map instance', () => {
        expect(
            mapValues(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                value => value,
            ),
        ).toEqual(
            new Map<string | number, string | number | boolean>([
                ['a', 1],
                ['b', 'two'],
                ['c', true],
                [4, 'nada'],
            ])
        );
        expect(
            mapValues(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                value => value === true,
            ),
        ).toEqual(
            new Map<string | number, string | number | boolean>([
                ['a', false],
                ['b', false],
                ['c', true],
                [4, false],
            ])
        );
        expect(
            mapValues(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                value => `v2_${value}_test`,
            ),
        ).toEqual(
            new Map<string | number, string | number | boolean>([
                ['a', 'v2_1_test'],
                ['b', 'v2_two_test'],
                ['c', 'v2_true_test'],
                [4, 'v2_nada_test'],
            ]));
    });
});
