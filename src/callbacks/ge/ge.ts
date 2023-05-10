/**
 * # ge
 * 
 * Returns a function that compares the two passed values with the ">=" operator.
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
export const ge = <T>(val1: T) => (val2: T) => {
    return val1 >= val2;
};
