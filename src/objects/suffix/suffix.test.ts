import { describe, expect, it } from 'vitest';
import { suffix } from './suffix';

describe('suffix', () => {
    it('should prefix the keys', () => {
        expect(suffix(
            { a: 1, b: 2, c: 4 },
            '_test',
        )).toEqual(
            { a_test: 1, b_test: 2, c_test: 4 },
        );
    });
});
