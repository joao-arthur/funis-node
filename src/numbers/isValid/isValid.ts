/**
 * # numbers.isValid
 *
 * Returns false for *undefined*, *null* and *NaN*. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * numbers.isValid(undefined) // false
 * numbers.isValid(null) // false
 * numbers.isValid(NaN) // false
 * ```
 *
 * ```ts
 * numbers.isValid(0) // true
 * numbers.isValid(1) // true
 * numbers.isValid(Infinity) // true
 * ```
 */
export function isValid(num: number | undefined | null): boolean {
    if (typeof num !== "number") {
        return false;
    }
    if (num === 0) {
        return true;
    }

    return !!num;
}
