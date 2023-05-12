/**
 * # isValid
 *
 * Returns false for _undefined_, _null_ and _NaN_. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * num.isValid(undefined) // false
 * num.isValid(null) // false
 * num.isValid(NaN) // false
 * ```
 *
 * ```ts
 * num.isValid(0) // true
 * num.isValid(1) // true
 * num.isValid(Infinity) // true
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
