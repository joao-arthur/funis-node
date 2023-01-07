import { first } from './first/first.js';
import { last } from './last/last.js';
import { rejectTimeout } from './rejectTimeout/rejectTimeout.js';
import { resolveTimeout } from './resolveTimeout/resolveTimeout.js';
import { objectify } from './objectify/objectify.js';

export const promises = {
    first,
    last,
    resolveTimeout,
    rejectTimeout,
    objectify,
} as const;
