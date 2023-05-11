import { pipe } from "../../std/pipe/pipe.js";
import { toFixed } from "../toFixed/toFixed.js";

/**
 * # range
 *
 * Returns a range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * numbers.range(2, -1) // []
 * numbers.range(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * numbers.range(-1, 2) // [-1, 0, 1, 2]
 * numbers.range(4, 5.1) // [4, 5]
 * numbers.range(2, -1, -1) // [2, 1, 0, -1]
 * numbers.range(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function range(
    from: number,
    to: number,
    step = 1,
): readonly number[] {
    const length = pipe(
        () => toFixed(to - from, 10),
        (delta) => toFixed(delta / step, 10),
        (deltaByStep) => Math.floor(deltaByStep) + 1,
        (length) => Math.max(length, 0),
    )(undefined);
    return Array(length)
        .fill(undefined)
        .map((_, i) => i * step + from)
        .map((value) => Number(value.toFixed(10)));
}
