/**
 * # eq
 * 
 * Returns a function that compares the two passed values with the "===" operator.
 * 
 * ## Example
 * 
 * ```ts
 * callbacks.eq(1)(1) // true
 * ```
 * 
 * ```ts
 * callbacks.gt(2)(2) // true
 * ```
 */
export const eq = <T>(val1: T) => (val2: T) => {
    return val1 === val2;
};
