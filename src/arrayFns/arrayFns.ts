import { first } from './first';
import { last } from './last';
import { sort } from './sort';
import { unique } from './unique';

export const arrayFns = {
    first,
    last,
    sort,
    unique,
} as const;
