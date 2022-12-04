import { describe, expect, it } from 'vitest';
import { replaceAccentuation } from './replaceAccentuation.js';

describe('replaceAccentuation', () => {
    it('should return the lower case accentuation', () => {
        expect(replaceAccentuation('áéíóú')).toBe('aeiou');
        expect(replaceAccentuation('àèìòù')).toBe('aeiou');
        expect(replaceAccentuation('ãẽĩõũ')).toBe('aeiou');
        expect(replaceAccentuation('äëïöü')).toBe('aeiou');
        expect(replaceAccentuation('âêîôû')).toBe('aeiou');
        expect(replaceAccentuation('ç')).toBe('c');
    });

    it('should return the upper case accentuation', () => {
        expect(replaceAccentuation('ÁÉÍÓÚ')).toBe('AEIOU');
        expect(replaceAccentuation('ÀÈÌÒÙ')).toBe('AEIOU');
        expect(replaceAccentuation('ÃẼĨÕŨ')).toBe('AEIOU');
        expect(replaceAccentuation('ÄËÏÖÜ')).toBe('AEIOU');
        expect(replaceAccentuation('ÂÊÎÔÛ')).toBe('AEIOU');
        expect(replaceAccentuation('Ç')).toBe('C');
    });
});
