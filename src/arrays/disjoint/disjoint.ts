import { one } from '../one/one.js';
import { unique } from '../unique/unique.js';

export function disjoint<T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            item => one(arrs, arr => arr.includes(item)),
        );
}
