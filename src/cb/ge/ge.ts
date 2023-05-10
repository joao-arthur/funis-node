/**
 * # ge
 *
 * Returns a function that compares val1 >= val2.
 *
 * ## Example
 *
 * ```ts
 * callbacks.ge(2)(1) // true
 * ```
 *
 * ```ts
 * callbacks.gt(1)(1) // true
 * ```
 */
export const ge = <T>(val2: T) => (val1: T) => {
    return val1 >= val2;
};
