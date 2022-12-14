import { once } from '../once/once.js';
import { unique } from '../unique/unique.js';

export function disjoint<T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            item => once(arrs, arr => arr.includes(item)),
        );
}
