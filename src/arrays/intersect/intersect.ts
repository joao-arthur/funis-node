import { unique } from "../unique/unique.js";

/**
 * # arrays.intersect
 *
 * Returns an array with the items that appear in every array.
 *
 * ## Example
 *
 * ```ts
 * arrays.intersect([[false, true], []]) // []
 * arrays.intersect([[1, 2, 3], [4, 5, 6]]) // []
 * ```
 *
 * ```ts
 * arrays.intersect([['']]) // ['']
 * arrays.intersect([[4, 5, 6], [5, 6, 7]]) // [5, 6]
 * arrays.intersect([
 *     ['George', 'Paul', 'John', 'Ringo', 'Ringo'],
 *     ['Ringo'],
 *     ['Ringo', 'John'],
 * ]) // ['Ringo']
 * ```
 */
export function intersect<const T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => arrs.every((arr) => arr.includes(item)),
        );
}
