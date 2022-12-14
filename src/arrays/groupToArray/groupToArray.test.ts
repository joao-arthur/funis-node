import { describe, it, expect } from 'vitest';
import { groupToArray } from './groupToArray.js';

describe('groupToArray', () => {
    it('should return empty for empty array', () => {
        expect(groupToArray([], item => item)).toEqual([]);
    });

    it('should return the items not present more than once', () => {
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
            groupToArray(['George', 'Paul', 'John', 'Ringo'], item => item === 'Ringo'),
        ).toEqual([['George', 'Paul', 'John'], ['Ringo']]);
        expect(
            groupToArray([false, true, false, true, false, true], Boolean),
        ).toEqual([[false, false, false], [true, true, true]]);
    });
});
