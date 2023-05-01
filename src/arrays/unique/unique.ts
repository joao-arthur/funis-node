/**
 * # arrays.unique
 *
 * Returns an array with the unique values.
 *
 * ## Example
 *
 * ```ts
 * arrays.unique([1, 1, 'john', 'john']) // [1, 'john']
 * arrays.unique([42]) // [42]
 * ```
 */
export function unique<const T>(arr: readonly T[]): readonly T[] {
    return Array.from(new Set(arr));
}
