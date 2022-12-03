import { describe, it, expect } from 'vitest';
import { rejectTimeout } from './rejectTimeout';

describe('rejectTimeout', () => {
    it('should reject the promise after the timeout', async () => {
        await expect(rejectTimeout(50)).rejects.toBe(undefined);
    });
});
