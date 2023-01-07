import { describe, expect, it } from 'vitest';
import { removeAccentuation } from './removeAccentuation.js';

describe('removeAccentuation', () => {
    it('should remove the lower case vowel accentuation', () => {
        expect(removeAccentuation('áéíóú')).toBe('');
        expect(removeAccentuation('àèìòù')).toBe('');
        expect(removeAccentuation('ãẽĩõũ')).toBe('');
        expect(removeAccentuation('äëïöü')).toBe('');
        expect(removeAccentuation('âêîôû')).toBe('');
        expect(removeAccentuation('ȁȅȉȍȕ')).toBe('');
        expect(removeAccentuation('ø')).toBe('');
        expect(removeAccentuation('ǘ')).toBe('');
        expect(removeAccentuation('ǜ')).toBe('');
    });

    it('should remove the upper case vowel accentuation', () => {
        expect(removeAccentuation('ÁÉÍÓÚ')).toBe('');
        expect(removeAccentuation('ÀÈÌÒÙ')).toBe('');
        expect(removeAccentuation('ÃẼĨÕŨ')).toBe('');
        expect(removeAccentuation('ÄËÏÖÜ')).toBe('');
        expect(removeAccentuation('ÂÊÎÔÛ')).toBe('');
        expect(removeAccentuation('ȀȄȈȌȔ')).toBe('');
        expect(removeAccentuation('Ø')).toBe('');
        expect(removeAccentuation('Ǘ')).toBe('');
        expect(removeAccentuation('Ǜ')).toBe('');
    });

    it('should remove the lower case consonant accentuation', () => {
        expect(removeAccentuation('ćǵḱĺḿńṕŕśẃýź')).toBe('');
        expect(removeAccentuation('ǹẁỳ')).toBe('');
        expect(removeAccentuation('ñṽỹ')).toBe('');
        expect(removeAccentuation('ḧẗẅẍÿ')).toBe('');
        expect(removeAccentuation('ĉĝĥĵŝŵŷẑ')).toBe('');
        expect(removeAccentuation('ȑ')).toBe('');
        expect(removeAccentuation('çḉ')).toBe('');
        expect(removeAccentuation('đ')).toBe('');
        expect(removeAccentuation('ħ')).toBe('');
        expect(removeAccentuation('ł')).toBe('');
        expect(removeAccentuation('ŧ')).toBe('');
    });

    it('should remove the upper case consonant accentuation', () => {
        expect(removeAccentuation('ĆǴḰĹḾŃṔŔŚẂÝŹ')).toBe('');
        expect(removeAccentuation('ǸẀỲ')).toBe('');
        expect(removeAccentuation('ÑṼỸ')).toBe('');
        expect(removeAccentuation('ḦẄẌŸ')).toBe('');
        expect(removeAccentuation('ĈĜĤĴŜŴŶẐ')).toBe('');
        expect(removeAccentuation('Ȑ')).toBe('');
        expect(removeAccentuation('ÇḈ')).toBe('');
        expect(removeAccentuation('Đ')).toBe('');
        expect(removeAccentuation('Ħ')).toBe('');
        expect(removeAccentuation('Ł')).toBe('');
        expect(removeAccentuation('Ŧ')).toBe('');
    });

    it('should return the non accentuated characters', () => {
        expect(
            removeAccentuation('abcdefghijklmnopqrstuvwyxz0123456789'),
        ).toBe('abcdefghijklmnopqrstuvwyxz0123456789');
        expect(
            removeAccentuation('ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789'),
        ).toBe(
            'ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789',
        );
        expect(
            removeAccentuation('¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ'),
        ).toBe(
            '¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ',
        );
    });
});
