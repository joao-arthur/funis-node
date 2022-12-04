import { first } from './first';
import { last } from './last';
import { rejectTimeout } from './rejectTimeout';
import { resolveTimeout } from './resolveTimeout';

export const promises = {
    first,
    last,
    rejectTimeout,
    resolveTimeout,
} as const;
