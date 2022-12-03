import { describe, it, expect } from 'vitest';
import { resolveTimeout } from './resolveTimeout';

describe('resolveTimeout', () => {
    it('should reject the promise after the timeout', async () => {
        await expect(resolveTimeout(50)).resolves.toBe(undefined);
    });
});
