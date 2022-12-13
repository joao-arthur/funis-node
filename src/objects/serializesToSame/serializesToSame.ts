import { plainObject } from '../../types/plainObject.js';
import { serialize } from '../serialize/serialize.js';

export function serializesToSame(objA: plainObject, objB: plainObject): boolean {
    return serialize(objA) === serialize(objB);
}
