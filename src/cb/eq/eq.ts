/**
 * # eq
 *
 * Returns a function that compares val1 === val2.
 *
 * ## Example
 *
 * ```ts
 * callbacks.eq(1)(1) // true
 * ```
 *
 * ```ts
 * callbacks.eq(2)(2) // true
 * ```
 */
export const eq = <T>(val2: T) => (val1: T) => {
    return val1 === val2;
};
