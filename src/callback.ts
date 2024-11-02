/**
 * # eq
 *
 * Returns a function that compares val1 === val2.
 *
 * ## Example
 *
 * ```ts
 * eq(1)(1) // true
 * ```
 *
 * ```ts
 * eq(2)(2) // true
 * ```
 */
export function eq<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 === val2;
    }
    return closure;
}

/**
 * # ne
 *
 * Returns a function that compares val1 !== val2.
 *
 * ## Example
 *
 * ```ts
 * ne(1)(2) // true
 * ```
 *
 * ```ts
 * ne(2)(1) // true
 * ```
 */
export function ne<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 !== val2;
    }
    return closure;
}

/**
 * # ge
 *
 * Returns a function that compares val1 >= val2.
 *
 * ## Example
 *
 * ```ts
 * ge(1)(2) // true
 * ```
 *
 * ```ts
 * ge(1)(1) // true
 * ```
 */
export function ge<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 >= val2;
    }
    return closure;
}

/**
 * # gt
 *
 * Returns a function that compares val1 > val2.
 *
 * ## Example
 *
 * ```ts
 * gt(1)(2) // true
 * ```
 *
 * ```ts
 * gt(1)(1) // false
 * ```
 */
export function gt<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 > val2;
    }
    return closure;
}

/**
 * # le
 *
 * Returns a function that compares val1 <= val2.
 *
 * ## Example
 *
 * ```ts
 * le(2)(1) // true
 * ```
 *
 * ```ts
 * le(1)(1) // true
 * ```
 */
export function le<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 <= val2;
    }
    return closure;
}

/**
 * # lt
 *
 * Returns a function that compares val1 < val2.
 *
 * ## Example
 *
 * ```ts
 * lt(2)(1) // true
 * ```
 *
 * ```ts
 * lt(1)(1) // false
 * ```
 */
export function lt<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 < val2;
    }
    return closure;
}
