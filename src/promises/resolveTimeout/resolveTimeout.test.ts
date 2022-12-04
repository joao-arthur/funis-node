import { describe, it, expect } from 'vitest';
import { resolveTimeout } from './resolveTimeout.js';

describe('resolveTimeout', () => {
    it('should reject the promise after the timeout', async () => {
        await expect(resolveTimeout('Hello, promise!', 50)).resolves.toBe('Hello, promise!');
    });
});
