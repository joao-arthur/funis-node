import { entries } from './entries/entries.js';
import { first } from './first/first.js';
import { keys } from './keys/keys.js';
import { last } from './last/last.js';
import { values } from './values/values.js';

export const maps = {
    entries,
    first,
    keys,
    last,
    values,
} as const;
