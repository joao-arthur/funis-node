/**
 * # eq
 *
 * Returns a function that compares val1 === val2.
 *
 * ## Example
 *
 * ```ts
 * cb.eq(1)(1) // true
 * ```
 *
 * ```ts
 * cb.eq(2)(2) // true
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
 * cb.ne(1)(2) // true
 * ```
 *
 * ```ts
 * cb.ne(2)(1) // true
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
 * cb.ge(1)(2) // true
 * ```
 *
 * ```ts
 * cb.ge(1)(1) // true
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
 * cb.gt(1)(2) // true
 * ```
 *
 * ```ts
 * cb.gt(1)(1) // false
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
 * cb.le(2)(1) // true
 * ```
 *
 * ```ts
 * cb.le(1)(1) // true
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
 * cb.lt(2)(1) // true
 * ```
 *
 * ```ts
 * cb.lt(1)(1) // false
 * ```
 */
export function lt<T>(val2: T): (val1: T) => boolean {
    function closure(val1: T): boolean {
        return val1 < val2;
    }
    return closure;
}
