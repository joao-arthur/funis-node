import { entries } from './entries';
import { values } from './values';
import { keys } from './keys';
import { top } from './top';
import { bottom } from './bottom';

export const mapFns = {
    entries,
    values,
    keys,
    top,
    bottom,
} as const;
