import { describe, expect, it } from 'vitest';
import { compareAsc } from './compareAsc.js';

describe('compareAsc', () => {
    it('should compare the strings in ascending order', () => {
        expect(
            ['q', 'p', 'w', 'o', 'Q', 'P', 'W', 'O'].sort(compareAsc),
        ).toEqual(['O', 'P', 'Q', 'W', 'o', 'p', 'q', 'w']);
    });
});
