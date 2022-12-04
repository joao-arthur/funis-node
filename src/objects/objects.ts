import { prefix } from './prefix/prefix.js';
import { serialize } from './serialize/serialize.js';
import { serializesToSame } from './serializesToSame/serializesToSame.js';
import { suffix } from './suffix/suffix.js';

export const objects = {
    prefix,
    serialize,
    serializesToSame,
    suffix,
} as const;
