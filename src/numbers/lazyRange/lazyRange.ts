/**
 * # numbers.lazyRange
 *
 * Returns an iterable range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * numbers.lazyRange(2, -1) // []
 * numbers.lazyRange(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * numbers.lazyRange(-1, 2) // [-1, 0, 1, 2]
 * numbers.lazyRange(4, 5.1) // [4, 5]
 * numbers.lazyRange(2, -1, -1) // [2, 1, 0, -1]
 * numbers.lazyRange(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function lazyRange(
    from: number,
    to: number,
    step = 1,
): IterableIterator<number> {
    const delta = Number((to - from).toFixed(10));
    const deltaByStep = Number((delta / step).toFixed(10));
    const length = Math.floor(deltaByStep) + 1;
    const treatedLength = Math.max(length, 0);

    let i = -1;

    return {
        next(): IteratorResult<number> {
            i++;
            const done = i + 1 > treatedLength;

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
