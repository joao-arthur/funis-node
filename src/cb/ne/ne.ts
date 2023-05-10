/**
 * # ne
 *
 * Returns a function that compares the two passed values with the "!=" operator.
 *
 * ## Example
 *
 * ```ts
 * callbacks.ne(1)(2) // true
 * ```
 *
 * ```ts
 * callbacks.ne(2)(1) // true
 * ```
 */
export const ne = <T>(val1: T) => (val2: T) => {
    return val1 !== val2;
};
