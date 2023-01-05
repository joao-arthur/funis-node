import { describe, expect, it } from 'vitest';
import { disjoint } from './disjoint.js';

describe('disjoint', () => {
    it('should disjoint empty array', () => {
        expect(disjoint([])).toEqual({});
    });

    it('should disjoint one object entry', () => {
        expect(
            disjoint([{ name: 'Steve Harris', country: 'UK' }]),
        ).toEqual({ name: 'Steve Harris', country: 'UK' });
    });

    it('should return the entries not present more than once', () => {
        expect(
            disjoint(
                [
                    { name: 'Steve Harris', country: 'UK' },
                    { name: 'Megadeth', foundation: 1983 },
                ],
            ),
        ).toEqual({ country: 'UK', foundation: 1983 });
    });
});
