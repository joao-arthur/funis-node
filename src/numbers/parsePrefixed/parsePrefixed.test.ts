import { describe, expect, it } from 'vitest';
import { parsePrefixed } from './parsePrefixed.js';

describe('parsePrefixed', () => {
    it('should parse prexifed values into number', () => {
        expect(parsePrefixed('$100.00', '$')).toBe(100.00);
        expect(parsePrefixed('US$0', 'US$')).toBe(0);
        expect(parsePrefixed('R$-1.53', 'R$')).toBe(-1.53);
        expect(parsePrefixed('^1.4', '^')).toBe(1.4);
    });

    it('should return undefined for wrong prexif', () => {
        expect(parsePrefixed('US$4', 'R$')).toBe(undefined);
        expect(parsePrefixed('R$-6', 'rem')).toBe(undefined);
        expect(parsePrefixed('@-1', 'km/h')).toBe(undefined);
    });

    it('should return undefined for values with suffix', () => {
        expect(parsePrefixed('speed: -4px', 'speed: ')).toBe(undefined);
        expect(parsePrefixed(':2em', ':')).toBe(undefined);
    });

});
