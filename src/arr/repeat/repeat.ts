import { num } from "../../num/mod.js";

/**
 * # repeat
 *
 * Returns a new array with the all the items repeated the specified number of times.
 *
 * ## Example
 *
 * ```ts
 * repeat([0, 1, 2], 0) // []
 * repeat([0, 1, 2], 1) // [0, 1, 2]
 * repeat([0, 1, 2], 2) // [0, 1, 2, 0, 1, 2]
 * ```
 */
export function repeat<const T>(
    arr: readonly T[],
    times: number,
): readonly T[] {
    return num.range(1, times).flatMap(() => arr);
}
