/**
 * # random
 *
 * Returns a random integer number between the range inclusively.
 *
 * ## Example
 *
 * ```ts
 * num.random(2, -1) // 2 | 1 | 0 | -1
 * num.random(-1, 2) // -1 | 0 | 1 | 2
 * num.random(5, 5) // 5
 * ```
 */
export function random(
    lower: number,
    upper: number,
): number {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
