import { describe, it, expect } from 'vitest';
import { groupToMap } from './groupToMap.js';

describe('groupToMap', () => {
    it('should return empty for empty array', () => {
        expect(groupToMap([], item => item)).toEqual(new Map());
    });

    it('should group the items by the callback return value in a Map instance', () => {
        expect(
            groupToMap([1, 2, 3], item => item),
        ).toEqual(
            new Map([[1, [1]], [2, [2]], [3, [3]]]),
        );
        expect(
            groupToMap([1, 2, 3], item => item % 2),
        ).toEqual(
            new Map([[1, [1, 3]], [0, [2]]]),
        );
        expect(
            groupToMap([1, 1, 2, 2, 3, 3], item => item),
        ).toEqual(
            new Map([[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]]),
        );
        expect(
            groupToMap(
                ['George', 'Paul', 'John', 'Ringo'],
                item => item === 'Ringo',
            ),
        ).toEqual(
            new Map([
                [false, ['George', 'Paul', 'John']],
                [true, ['Ringo']],
            ]),
        );
        expect(
            groupToMap(
                [false, true, false, true, false, true],
                Boolean,
            ),
        ).toEqual(
            new Map([
                [false, [false, false, false]],
                [true, [true, true, true]],
            ]),
        );
        expect(
            groupToMap(
                [
                    { type: 'grass', name: 'bulbasaur' },
                    { type: 'fire', name: 'charmander' },
                    { type: 'water', name: 'squirtle' },
                    { type: 'bug', name: 'caterpie' },
                    { type: 'water', name: 'psyduck' },
                ],
                item => item.type,
            ),
        ).toEqual(
            new Map([
                ['grass', [{ type: 'grass', name: 'bulbasaur' }]],
                ['fire', [{ type: 'fire', name: 'charmander' }]],
                ['water', [
                    { type: 'water', name: 'squirtle' },
                    { type: 'water', name: 'psyduck' },
                ]],
                ['bug', [{ type: 'bug', name: 'caterpie' }]],
            ]),
        );
    });
});
