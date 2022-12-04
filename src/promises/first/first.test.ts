import { describe, it, expect } from 'vitest';
import { rejectTimeout } from '../rejectTimeout/rejectTimeout.js';
import { resolveTimeout } from '../resolveTimeout/resolveTimeout.js';
import { first } from './first.js';

describe('first', () => {
    it('should return the value of the first promise to resolve/reject', async () => {
        await expect(
            first([
                resolveTimeout('Socrates', 20),
                resolveTimeout('Plato', 10),
                rejectTimeout('Aristotle', 5),
            ]),
        ).rejects.toBe('Aristotle');
    });
});
