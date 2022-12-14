import { describe, it, expect } from 'vitest';
import { groupToObject } from './groupToObject.js';

describe('groupToObject', () => {
    it('should return empty for empty array', () => {
        expect(groupToObject([], item => item)).toEqual({});
    });

    it('should return the items not present more than once', () => {
        expect(
            groupToObject([1, 2, 3], item => item),
        ).toEqual({ 1: [1], 2: [2], 3: [3] });
        expect(
            groupToObject([1, 2, 3], item => item % 2),
        ).toEqual({ 1: [1, 3], 0: [2] });
        expect(
            groupToObject([1, 1, 2, 2, 3, 3], item => item),
        ).toEqual({ 1: [1, 1], 2: [2, 2], 3: [3, 3] });
        expect(
            groupToObject(
                ['George', 'Paul', 'John', 'Ringo'],
                item => item === 'Ringo'),
        ).toEqual({
            false: ['George', 'Paul', 'John'],
            true: ['Ringo'],
        });
        expect(
            groupToObject(
                [false, true, false, true, false, true],
                Boolean),
        ).toEqual({
            false: [false, false, false],
            true: [true, true, true],
        });
        expect(
            groupToObject(
                [
                    { type: 'grass', name: 'bulbasaur' },
                    { type: 'fire', name: 'charmander' },
                    { type: 'water', name: 'squirtle' },
                    { type: 'bug', name: 'caterpie' },
                    { type: 'water', name: 'psyduck' },
                ],
                item => item.type,
            ),
        ).toEqual({
            grass: [{ type: 'grass', name: 'bulbasaur' }],
            fire: [{ type: 'fire', name: 'charmander' }],
            water: [
                { type: 'water', name: 'squirtle' },
                { type: 'water', name: 'psyduck' },
            ],
            bug: [{ type: 'bug', name: 'caterpie' }],
        });
    });
});
