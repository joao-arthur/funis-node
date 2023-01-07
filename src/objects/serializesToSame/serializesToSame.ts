import { combinations } from '../../arrays/combinations/combinations.js';
import { plainObject } from '../../types/plainObject.js';
import { serialize } from '../serialize/serialize.js';

export function serializesToSame(
    objs: plainObject[],
): boolean {
    return combinations(objs)
        .every(([a, b]) => serialize(a) === serialize(b));
}
