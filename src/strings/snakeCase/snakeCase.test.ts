import { describe, it, expect } from 'vitest';
import { snakeCase } from './snakeCase.js';

describe('snakeCase', () => {
    it('should tranform the passed value to pascal case', () => {
        expect(snakeCase('')).toBe('');
        expect(snakeCase('j S o N')).toBe('j_s_o_n');
        expect(snakeCase('hey')).toBe('hey');
        expect(snakeCase('hey Joe')).toBe('hey_joe');
        expect(snakeCase('hey Jude dont m4ke it b4d')).toBe('hey_jude_dont_m4ke_it_b4d');
    });
});
