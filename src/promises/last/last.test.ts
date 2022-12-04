import { describe, it, expect } from 'vitest';
import { rejectTimeout } from '../rejectTimeout';
import { resolveTimeout } from '../resolveTimeout';
import { last } from './last';

describe('last', () => {
    it('should return the value of the last promise to resolve/reject', async () => {
        await expect(
            last([
                resolveTimeout('Socrates', 20),
                resolveTimeout('Plato', 10),
                rejectTimeout('Aristotle', 5),
            ]),
        ).resolves.toBe('Socrates');
    });
});
