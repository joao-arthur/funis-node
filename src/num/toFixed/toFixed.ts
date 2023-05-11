/**
 * # toFixed
 *
 * Wrapper of the toFixed function with a cast to number.
 *
 * ## Example
 *
 * ```ts
 * num.toFixed(3, 0) // 3
 * num.toFixed(1.1, 1) // 1.1
 * num.toFixed(10.10101, 1) // 10.1
 * ```
 */
export function toFixed(num: number, digits: number): number {
    return Number(num.toFixed(digits));
}
