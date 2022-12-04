import { plainObject } from '../../types/plainObject';
import { serialize } from '../serialize';

export function serializesToSame(a: plainObject, b: plainObject): boolean {
    return serialize(a) === serialize(b);
}
