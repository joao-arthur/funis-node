/**
 * # gt
 *
 * Returns a function that compares val1 > val2.
 *
 * ## Example
 *
 * ```ts
 * cb.gt(1)(2) // true
 * ```
 *
 * ```ts
 * cb.gt(1)(1) // false
 * ```
 */
export const gt = <T>(val2: T) => (val1: T) => {
    return val1 > val2;
};
