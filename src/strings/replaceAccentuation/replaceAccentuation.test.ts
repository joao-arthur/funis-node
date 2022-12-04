import { describe, expect, it } from 'vitest';
import { replaceAccentuation } from './replaceAccentuation.js';

describe('replaceAccentuation', () => {
    it('should replace the lower case vowel accentuation', () => {
        expect(replaceAccentuation('áéíóú')).toBe('aeiou');
        expect(replaceAccentuation('àèìòù')).toBe('aeiou');
        expect(replaceAccentuation('ãẽĩõũ')).toBe('aeiou');
        expect(replaceAccentuation('äëïöü')).toBe('aeiou');
        expect(replaceAccentuation('âêîôû')).toBe('aeiou');
        expect(replaceAccentuation('ȁȅȉȍȕ')).toBe('aeiou');
        expect(replaceAccentuation('ø')).toBe('o');
        expect(replaceAccentuation('ǘ')).toBe('u');
        expect(replaceAccentuation('ǜ')).toBe('u');
    });

    it('should replace the upper case vowel accentuation', () => {
        expect(replaceAccentuation('ÁÉÍÓÚ')).toBe('AEIOU');
        expect(replaceAccentuation('ÀÈÌÒÙ')).toBe('AEIOU');
        expect(replaceAccentuation('ÃẼĨÕŨ')).toBe('AEIOU');
        expect(replaceAccentuation('ÄËÏÖÜ')).toBe('AEIOU');
        expect(replaceAccentuation('ÂÊÎÔÛ')).toBe('AEIOU');
        expect(replaceAccentuation('ȀȄȈȌȔ')).toBe('AEIOU');
        expect(replaceAccentuation('Ø')).toBe('O');
        expect(replaceAccentuation('Ǘ')).toBe('U');
        expect(replaceAccentuation('Ǜ')).toBe('U');
    });

    it('should replace the lower case consonant accentuation', () => {
        expect(replaceAccentuation('ćǵḱĺḿńṕŕśẃýź')).toBe('cgklmnprswyz');
        expect(replaceAccentuation('ǹẁỳ')).toBe('nwy');
        expect(replaceAccentuation('ñṽỹ')).toBe('nvy');
        expect(replaceAccentuation('ḧẗẅẍÿ')).toBe('htwxy');
        expect(replaceAccentuation('ĉĝĥĵŝŵŷẑ')).toBe('cghjswyz');
        expect(replaceAccentuation('ȑ')).toBe('r');
        expect(replaceAccentuation('çḉ')).toBe('cc');
        expect(replaceAccentuation('đ')).toBe('d');
        expect(replaceAccentuation('ħ')).toBe('h');
        expect(replaceAccentuation('ł')).toBe('l');
        expect(replaceAccentuation('ŧ')).toBe('t');
    });

    it('should replace the upper case consonant accentuation', () => {
        expect(replaceAccentuation('ĆǴḰĹḾŃṔŔŚẂÝŹ')).toBe('CGKLMNPRSWYZ');
        expect(replaceAccentuation('ǸẀỲ')).toBe('NWY');
        expect(replaceAccentuation('ÑṼỸ')).toBe('NVY');
        expect(replaceAccentuation('ḦẄẌŸ')).toBe('HWXY');
        expect(replaceAccentuation('ĈĜĤĴŜŴŶẐ')).toBe('CGHJSWYZ');
        expect(replaceAccentuation('Ȑ')).toBe('R');
        expect(replaceAccentuation('ÇḈ')).toBe('CC');
        expect(replaceAccentuation('Đ')).toBe('D');
        expect(replaceAccentuation('Ħ')).toBe('H');
        expect(replaceAccentuation('Ł')).toBe('L');
        expect(replaceAccentuation('Ŧ')).toBe('T');
    });

    it('should return the non accent characters', () => {
        expect(replaceAccentuation(
            'abcdefghijklmnopqrstuvwyxz0123456789'),
        ).toBe(
            'abcdefghijklmnopqrstuvwyxz0123456789',
        );
        expect(replaceAccentuation(
            'ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789'),
        ).toBe(
            'ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789',
        );
        expect(replaceAccentuation(
            '¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®ŧ←↓→øþ´ªæßªĸ´~º«»©“”nµ'),
        ).toBe(
            '¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®ŧ←↓→øþ´ªæßªĸ´~º«»©“”nµ',
        );
    });
});
