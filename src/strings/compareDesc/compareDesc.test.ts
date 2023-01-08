import { describe, expect, it } from 'vitest';
import { compareDesc } from './compareDesc.js';

describe('compareDesc', () => {
    it('should compare the strings in descending order', () => {
        expect(
            ['q', 'p', 'w', 'o', 'Q', 'P', 'W', 'O'].sort(compareDesc),
        ).toEqual(['w', 'q', 'p', 'o', 'W', 'Q', 'P', 'O']);
    });
});
