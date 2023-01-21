import { mapEntries } from './mapEntries/mapEntries.js';
import { mapKeys } from './mapKeys/mapKeys.js';
import { mapValues } from './mapValues/mapValues.js';
import { entries } from './entries/entries.js';
import { first } from './first/first.js';
import { keys } from './keys/keys.js';
import { last } from './last/last.js';
import { values } from './values/values.js';
import { fromObject } from './fromObject/fromObject.js';

export const maps = {
    mapEntries,
    mapKeys,
    mapValues,
    entries,
    first,
    keys,
    last,
    values,
    fromObject,
} as const;
