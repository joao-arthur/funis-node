/**
 * # compareAsc
 *
 * Compare the numbers in ascending order.
 *
 * ## Example
 *
 * ```ts
 * [1, 9, 2, 8, 3, 7, 4].sort(compareAsc) // [1, 2, 3, 4, 7, 8, 9]
 * ```
 */
export function compareAsc(a: number, b: number): number {
    return a > b ? 1 : -1;
}
