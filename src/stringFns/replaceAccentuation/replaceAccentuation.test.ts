import { describe, expect, it } from 'vitest';
import { replaceAccentuation } from './replaceAccentuation';

describe('replaceAccentuation', () => {
    it('should return the lower case accentuation', () => {
        expect(replaceAccentuation('')).toBe('');
    });

    it('should return the upper case accentuation', () => {
        expect(replaceAccentuation('')).toBe('');
    });
});
