/**
 * # lt
 *
 * Returns a function that compares val1 < val2.
 *
 * ## Example
 *
 * ```ts
 * callbacks.lt(1)(2) // true
 * ```
 *
 * ```ts
 * callbacks.gt(1)(1) // false
 * ```
 */
export const lt = <T>(val2: T) => (val1: T) => {
    return val1 < val2;
};
