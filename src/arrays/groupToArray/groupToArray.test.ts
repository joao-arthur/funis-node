import { describe, it, expect } from 'vitest';
import { groupToArray } from './groupToArray.js';

describe('groupToArray', () => {
    it('should return empty for empty array', () => {
        expect(groupToArray([], item => item)).toEqual([]);
    });

    it('should group the items by the callback return value in a array', () => {
        expect(
            groupToArray([1, 2, 3], item => item),
        ).toEqual([[1], [2], [3]]);
        expect(
            groupToArray([1, 2, 3], item => item % 2),
        ).toEqual([[1, 3], [2]]);
        expect(
            groupToArray([1, 1, 2, 2, 3, 3], item => item),
        ).toEqual([[1, 1], [2, 2], [3, 3]]);
        expect(
            groupToArray(
                ['George', 'Paul', 'John', 'Ringo'],
                item => item === 'Ringo',
            ),
        ).toEqual([['George', 'Paul', 'John'], ['Ringo']]);
        expect(
            groupToArray(
                [false, true, false, true, false, true],
                Boolean,
            ),
        ).toEqual([[false, false, false], [true, true, true]]);
        expect(
            groupToArray(
                [
                    { type: 'grass', name: 'bulbasaur' },
                    { type: 'fire', name: 'charmander' },
                    { type: 'water', name: 'squirtle' },
                    { type: 'bug', name: 'caterpie' },
                    { type: 'water', name: 'psyduck' },
                ],
                item => item.type,
            ),
        ).toEqual([
            [{ type: 'grass', name: 'bulbasaur' }],
            [{ type: 'fire', name: 'charmander' }],
            [
                { type: 'water', name: 'squirtle' },
                { type: 'water', name: 'psyduck' },
            ],
            [{ type: 'bug', name: 'caterpie' }],
        ]);
    });
});
