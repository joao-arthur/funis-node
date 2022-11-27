import { describe, expect, it } from 'vitest';
import { isNumberValid } from './isNumberValid';

describe('isNumberValid', () => {
    it('should return true if it is a valid number', () => {
        expect(isNumberValid(1)).toBe(true);
        expect(isNumberValid(-1)).toBe(true);
        expect(isNumberValid(0)).toBe(true);
        expect(isNumberValid(3.1)).toBe(true);
        expect(isNumberValid(-1.82)).toBe(true);
        expect(isNumberValid(+0)).toBe(true);
        expect(isNumberValid(-0)).toBe(true);
        expect(isNumberValid(Number.EPSILON)).toBe(true);
        expect(isNumberValid(Number.MAX_SAFE_INTEGER)).toBe(true);
        expect(isNumberValid(Number.NEGATIVE_INFINITY)).toBe(true);
        expect(isNumberValid(Number.POSITIVE_INFINITY)).toBe(true);
    });

    it('should return false if it is a invalid number', () => {
        expect(isNumberValid(Number.NaN)).toBe(false);
        expect(isNumberValid(undefined)).toBe(false);
        expect(isNumberValid(null)).toBe(false);
    });
});
