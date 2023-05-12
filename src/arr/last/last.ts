/**
 * # last
 *
 * Returns the last item of the array. If the array is empty, returns _undefined_.
 *
 * ## Example
 *
 * ```ts
 * arr.last([]) // undefined
 * ```
 *
 * ```ts
 * arr.last([4, 5, 6]) // 6
 * ```
 */
export function last<const T>(arr: readonly T[]): T | undefined {
    return arr[arr.length - 1];
}
