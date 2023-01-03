import { describe, expect, it } from 'vitest';
import { mapEntries } from './mapEntries.js';

describe('mapEntries', () => {
    it('should map the entries into a new Map instance', () => {
        expect(
            mapEntries(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                ([key, value]) => [key, value],
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
            mapEntries(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                ([key, value]) => [`key_${key}`, `value_${value}`],
            ),
        ).toEqual(
            new Map([
                ['key_a', 'value_1'],
                ['key_b', 'value_two'],
                ['key_c', 'value_true'],
                ['key_4', 'value_nada'],
            ])
        );
        expect(
            mapEntries(
                new Map<string | number, string | number | boolean>([
                    ['a', 1],
                    ['b', 'two'],
                    ['c', true],
                    [4, 'nada'],
                ]),
                () => ['key', 'value'],
            ),
        ).toEqual(
            new Map([
                ['key', 'value']
            ])
        );
    });
});
