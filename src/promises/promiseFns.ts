import { first } from './first';
import { last } from './last';
import { rejectTimeout } from './rejectTimeout';
import { resolveTimeout } from './resolveTimeout';

export const promiseFns = {
    first,
    last,
    rejectTimeout,
    resolveTimeout,
} as const;
