import { describe, it, expect } from 'vitest';
import { pipe } from './pipe';

describe('pipe', () => {
    it('should pipe the functions and execute', () => {
        expect(
            pipe(
                (num: number) => num - 90,
                num => num / 2,
                num => `${num}${num}.${num}${num}`,
            )(100),
        ).toBe('55.55');

        expect(
            pipe(
                (num: number) => num - 90,
                num => num / 2,
                num => num - 2,
                num => -num,
                num => num + 10,
            )(100),
        ).toBe(7);
    });
});
