import { describe, expect, it } from 'vitest';
import { random } from './random.js';

describe('random', () => {
    it('should return undefined for empty arra', () => {
        expect(random([])).toBe(undefined);
    });

    it('should return a random item', () => {
        expect(random([true])).toBe(true);
        expect(random([5])).toBe(5);
        expect(random(['Memento mori'])).toBe('Memento mori');
    });

    it('should return a random item', () => {
        expect(random([true, false, 0, 1, 'y', 'n'])).toSatisfy(
            (value: string | number | boolean) => [true, false, 0, 1, 'y', 'n'].includes(value),
        );
    });
});
