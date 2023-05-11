/**
 * # lt
 *
 * Returns a function that compares val1 < val2.
 *
 * ## Example
 *
 * ```ts
 * cb.lt(2)(1) // true
 * ```
 *
 * ```ts
 * cb.lt(1)(1) // false
 * ```
 */
export const lt = <T>(val2: T) => (val1: T) => {
    return val1 < val2;
};
