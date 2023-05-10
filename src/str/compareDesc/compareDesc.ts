/**
 * # compareDesc
 *
 * Compare the numbers in descending order.
 *
 * ## Example
 *
 * ```ts
 * ['q', 'p', 'Q', 'P'].sort(compareDesc) // ['Q', 'P', 'q', 'p']
 * ```
 */
export function compareDesc(a: string, b: string): number {
    return a > b ? -1 : 1;
}
