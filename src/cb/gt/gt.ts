/**
 * # gt
 *
 * Returns a function that compares val1 > val2.
 *
 * ## Example
 *
 * ```ts
 * callbacks.gt(2)(1) // true
 * ```
 *
 * ```ts
 * callbacks.gt(1)(1) // false
 * ```
 */
export const gt = <T>(val2: T) => (val1: T) => {
    return val1 > val2;
};
