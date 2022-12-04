import { first } from './first/first.js';
import { last } from './last/last.js';
import { rejectTimeout } from './rejectTimeout/rejectTimeout.js';
import { resolveTimeout } from './resolveTimeout/resolveTimeout.js';

export const promises = {
    first,
    last,
    rejectTimeout,
    resolveTimeout,
} as const;
