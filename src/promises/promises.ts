import { last } from './last/last.js';
import { rejectTimeout } from './rejectTimeout/rejectTimeout.js';
import { resolveTimeout } from './resolveTimeout/resolveTimeout.js';
import { objectify } from './objectify/objectify.js';
import { retry } from './retry/retry.js';

export const promises = {
    last,
    resolveTimeout,
    rejectTimeout,
    objectify,
    retry,
} as const;
