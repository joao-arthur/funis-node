import { describe, expect, it } from 'vitest';
import { random } from './random.js';

describe('random', () => {
    it('should return a random character', () => {
        expect(random('')).toBe('');
        expect(random('a')).toBe('a');
        expect(random('b')).toBe('b');
        expect(random('c')).toBe('c');
    });

    it('should return a random character', () => {
        expect(random('Botticelli')).toHaveLength(1);
        expect(random('Botticelli')).toSatisfy(
            (value: string) => 'Botticelli'.includes(value),
        );
        expect(random('Michelangelo')).toHaveLength(1);
        expect(random('Michelangelo')).toSatisfy(
            (value: string) => 'Michelangelo'.includes(value),
        );
    });
});
