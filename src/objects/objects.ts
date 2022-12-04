import { prefix } from './prefix';
import { suffix } from './suffix';
import { serialize } from './serialize';
import { serializesToSame } from './serializesToSame';

export const objects = {
    prefix,
    suffix,
    serialize,
    serializesToSame,
} as const;
