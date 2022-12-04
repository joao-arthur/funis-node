import { plainObject } from '../../types/plainObject.js';
import { serialize } from '../serialize/serialize.js';

export function serializesToSame(a: plainObject, b: plainObject): boolean {
    return serialize(a) === serialize(b);
}
