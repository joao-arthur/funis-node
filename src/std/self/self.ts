/**
 * # self
 *
 * Returns the passed value.
 *
 * ## Example
 *
 * ```ts
 * self(1) // 1
 * self('goodbye') // 'goodbye'
 * ```
 */
export function self<const T>(value: T): T {
    return value;
}
