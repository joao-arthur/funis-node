/**
 * # compareAsc
 *
 * Compare the numbers in ascending order.
 *
 * ## Example
 *
 * ```ts
 * ['q', 'p', 'Q', 'P'].sort(str.compareAsc) // ['P', 'Q', 'p', 'q']
 * ```
 */
export function compareAsc(a: string, b: string): number {
    return a > b ? 1 : -1;
}
