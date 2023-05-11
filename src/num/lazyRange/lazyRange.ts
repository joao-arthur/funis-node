import { std } from "../../std/mod.js";
import { toFixed } from "../toFixed/toFixed.js";

/**
 * # lazyRange
 *
 * Returns an iterable range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * num.lazyRange(2, -1) // []
 * num.lazyRange(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * num.lazyRange(-1, 2) // [-1, 0, 1, 2]
 * num.lazyRange(4, 5.1) // [4, 5]
 * num.lazyRange(2, -1, -1) // [2, 1, 0, -1]
 * num.lazyRange(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function lazyRange(
    from: number,
    to: number,
    step = 1,
): IterableIterator<number> {
    const length = std.pipe(
        () => toFixed(to - from, 10),
        (delta) => toFixed(delta / step, 10),
        (deltaByStep) => Math.floor(deltaByStep) + 1,
        (length) => Math.max(length, 0),
    )(undefined);

    let i = -1;
    return {
        next(): IteratorResult<number> {
            i++;
            const done = i + 1 > length;

            return {
                done,
                value: done ? undefined! : i * step + from,
            };
        },
        [Symbol.iterator](): IterableIterator<number> {
            return this;
        },
    };
}
