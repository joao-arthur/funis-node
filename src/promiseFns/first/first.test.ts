import { describe, it, expect } from 'vitest';
import { rejectTimeout } from '../rejectTimeout';
import { resolveTimeout } from '../resolveTimeout';
import { first } from './first';

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
