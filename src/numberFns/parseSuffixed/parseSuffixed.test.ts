import { describe, expect, it } from 'vitest';
import { parseSuffixed } from './parseSuffixed';

describe('parseSuffixed', () => {
    it('should parse suffixed values into number', () => {
        expect(parseSuffixed('100px', 'px')).toBe(100);
        expect(parseSuffixed('0px', 'px')).toBe(0);
        expect(parseSuffixed('-1.53m/s', 'm/s')).toBe(-1.53);
        expect(parseSuffixed('1.4kº', 'kº')).toBe(1.4);
    });

    it('should return undefined for wrong suffix', () => {
        expect(parseSuffixed('4px', 'rem')).toBe(undefined);
        expect(parseSuffixed('-6em', 'rem')).toBe(undefined);
        expect(parseSuffixed('-1m/s', 'km/h')).toBe(undefined);
    });

    it('should return undefined for values with prefix', () => {
        expect(parseSuffixed('speed: -4px', 'px')).toBe(undefined);
        expect(parseSuffixed(':2em', 'rem')).toBe(undefined);
    });

});
