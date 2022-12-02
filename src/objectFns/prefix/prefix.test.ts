import { describe, expect, it } from 'vitest';
import { prefix } from './prefix';

describe('prefix', () => {
    it('should prefix the keys', () => {
        expect(prefix(
            { a: 1, b: 2, c: 4 },
            'v2_',
        )).toEqual(
            { v2_a: 1, v2_b: 2, v2_c: 4 },
        );
    });
});
