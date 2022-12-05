import { describe, it, expect } from 'vitest';
import { kebabCase } from './kebabCase.js';

describe('kebabCase', () => {
    it('should tranform the passed value to pascal case', () => {
        expect(kebabCase('')).toBe('');
        expect(kebabCase('j S o N')).toBe('j-s-o-n');
        expect(kebabCase('hey')).toBe('hey');
        expect(kebabCase('hey Joe')).toBe('hey-joe');
        expect(kebabCase('hey Jude dont m4ke it b4d')).toBe('hey-jude-dont-m4ke-it-b4d');
    });
});
