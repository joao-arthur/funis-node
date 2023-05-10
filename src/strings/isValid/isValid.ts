/**
 * # isValid
 *
 * Returns false for *undefined* and *null*. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * strings.isValid(undefined) // false
 * strings.isValid(null) // false
 * ```
 *
 * ```ts
 * strings.isValid('') // true
 * strings.isValid(' ') // true
 * strings.isValid('Lorem ipsum') // true
 * ```
 */
export function isValid(str: string | undefined | null): boolean {
    if (typeof str !== "string") {
        return false;
    }
    if (str === "") {
        return true;
    }

    return !!str;
}
