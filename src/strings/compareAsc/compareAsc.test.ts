import { describe, expect, it } from 'vitest';
import { compareAsc } from './compareAsc.js';

describe('compareAsc', () => {
    it('should compare the strings in ascending order', () => {
        expect(
            ['q', 'p', 'Q', 'P'].sort(compareAsc),
        ).toEqual(['P', 'Q', 'p', 'q']);
    });
});
