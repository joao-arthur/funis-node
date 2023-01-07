import { describe, expect, it } from 'vitest';
import { objectify } from './objectify.js';

describe('objectify', () => {
    it('should return the resolve as the value', async () => {
        expect(await objectify(Promise.resolve(undefined))).toEqual(
            { value: undefined, error: undefined, type: 'resolved' },
        );
        expect(await objectify(Promise.resolve('Symbolic acts'))).toEqual(
            { value: 'Symbolic acts', error: undefined, type: 'resolved' },
        );
    });

    it('should return the reject as the error', async () => {
        expect(await objectify(Promise.reject(undefined))).toEqual(
            { value: undefined, error: undefined, type: 'rejected' },
        );
        expect(await objectify(Promise.reject('So vivid'))).toEqual(
            { value: undefined, error: 'So vivid', type: 'rejected' },
        );
    });
});
