import { describe, expect, it } from 'vitest';
import { mapKeys } from './mapKeys.js';

describe('mapKeys', () => {
    it('should map the keys into a Map instance', () => {
        expect(
            mapKeys(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                key => key,
            ),
        ).toEqual(
            new Map<string | number, string | number | boolean>([
                ['a', 1],
                ['b', 'two'],
                ['c', true],
                [4, 'nada'],
            ]),
        );
        expect(
            mapKeys(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                key => `v2_${key}_test`,
            ),
        ).toEqual(
            new Map<string | number, string | number | boolean>([
                ['v2_a_test', 1],
                ['v2_b_test', 'two'],
                ['v2_c_test', true],
                ['v2_4_test', 'nada'],
            ]),
        );
        expect(
            mapKeys(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                () => 'key',
            ),
        ).toEqual(new Map([['key', 'nada']]));
    });
});
