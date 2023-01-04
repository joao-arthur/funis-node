import { describe, it, expect } from 'vitest';
import { pascalCase } from './pascalCase.js';

describe('pascalCase', () => {
    it('should transform empty string to pascal case', () => {
        expect(pascalCase('')).toBe('');
    });

    it('should transform single word to pascal case', () => {
        expect(pascalCase('hey')).toBe('Hey');
    });

    it('should transform the value separated by space to pascal case', () => {
        expect(pascalCase('j S o N')).toBe('JSON');
        expect(pascalCase('hey Jo3')).toBe('HeyJo3');
    });

    it('should transform the value separated by underscore to pascal case', () => {
        expect(pascalCase('j_S_o_N')).toBe('JSON');
        expect(pascalCase('hey_Jo3')).toBe('HeyJo3');
    });

    it('should transform the value separated by minus sign to pascal case', () => {
        expect(pascalCase('j-S-o-N')).toBe('JSON');
        expect(pascalCase('hey-Jo3')).toBe('HeyJo3');
    });
});
