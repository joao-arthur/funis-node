import { mapEntries } from './mapEntries/mapEntries.js';
import { mapKeys } from './mapKeys/mapKeys.js';
import { mapValues } from './mapValues/mapValues.js';
import { serialize } from './serialize/serialize.js';
import { serializesToSame } from './serializesToSame/serializesToSame.js';

export const objects = {
    mapEntries,
    mapKeys,
    mapValues,
    serialize,
    serializesToSame,
} as const;
