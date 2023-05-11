/**
 * # self
 *
 * Returns the passed value.
 *
 * ## Example
 *
 * ```ts
 * std.self(1) // 1
 * std.self('goodbye') // 'goodbye'
 * ```
 */
export function self<const T>(value: T): T {
    return value;
}
