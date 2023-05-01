import { once } from "../once/once.js";
import { unique } from "../unique/unique.js";

/**
 * # arrays.disjoint
 *
 * Returns an array with the items that appear in only one array.
 *
 * ## Example
 *
 * ```ts
 * arrays.disjoint([[1, 2, 3], [1, 2, 3]]) // []
 * ```
 *
 * ```ts
 * arrays.disjoint([[1]]) // [1]
 * arrays.disjoint([[false, true], []]) // [false, true]
 * arrays.disjoint([[4, 5, 6], [5, 6, 7]]) // [4, 7]
 * arrays.disjoint([
 *     ['George', 'Paul', 'John', 'Ringo', 'George'],
 *     ['Ringo'],
 *     ['John'],
 * ]) // ['George', 'Paul']
 * ```
 */
export function disjoint<const T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => once(arrs, (arr) => arr.includes(item)),
        );
}
