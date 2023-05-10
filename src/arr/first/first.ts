/**
 * # first
 *
 * Returns the first item of the array.
 *
 * ## Example
 *
 * ```ts
 * arrays.first([]) // undefined
 * ```
 *
 * ```ts
 * arrays.first([4, 5, 6]) // 4
 * ```
 */
export function first<const T>(arr: readonly T[]): T {
    return arr[0];
}
