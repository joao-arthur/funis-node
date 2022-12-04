import { entries } from './entries/entries.js';
import { values } from './values/values.js';
import { keys } from './keys/keys.js';
import { top } from './top/top.js';
import { bottom } from './bottom/bottom.js';

export const maps = {
    entries,
    values,
    keys,
    top,
    bottom,
} as const;
