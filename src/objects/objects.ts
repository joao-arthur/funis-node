import { prefix } from './prefix/prefix.js';
import { suffix } from './suffix/suffix.js';
import { serialize } from './serialize/serialize.js';
import { serializesToSame } from './serializesToSame/serializesToSame.js';

export const objects = {
    prefix,
    suffix,
    serialize,
    serializesToSame,
} as const;
