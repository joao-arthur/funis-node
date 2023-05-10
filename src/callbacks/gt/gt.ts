/**
 * # gt
 *
 * Returns a function that compares the two passed values with the ">" operator.
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
export const gt = <T>(val1: T) => (val2: T) => {
    return val1 > val2;
};
