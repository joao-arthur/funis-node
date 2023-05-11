/**
 * # unique
 *
 * Returns an array with the unique values.
 *
 * ## Example
 *
 * ```ts
 * arr.unique([1, 1, 'john', 'john']) // [1, 'john']
 * arr.unique([42]) // [42]
 * ```
 */
export function unique<const T>(arr: readonly T[]): readonly T[] {
    return Array.from(new Set(arr));
}
