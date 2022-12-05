import { describe, it, expect } from 'vitest';
import { pascalCase } from './pascalCase.js';

describe('pascalCase', () => {
    it('should tranform the passed value to pascal case', () => {
        expect(pascalCase('')).toBe('');
        expect(pascalCase('j S o N')).toBe('JSON');
        expect(pascalCase('hey')).toBe('Hey');
        expect(pascalCase('hey Joe')).toBe('HeyJoe');
        expect(pascalCase('hey Jude dont m4ke it b4d')).toBe('HeyJudeDontM4keItB4d');
    });
});
