import { describe, it, expect } from 'vitest';
import { camelCase } from './camelCase.js';

describe('camelCase', () => {
    it('should tranform the passed value to camel case', () => {
        expect(camelCase('')).toBe('');
        expect(camelCase('j s o n')).toBe('jSON');
        expect(camelCase('hey')).toBe('hey');
        expect(camelCase('hey Joe')).toBe('heyJoe');
        expect(camelCase('hey Jude dont m4ke it b4d')).toBe('heyJudeDontM4keItB4d');
    });
});
