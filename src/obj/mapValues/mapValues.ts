import { std } from "../../std/mod.js";
import { plainObject } from "../../types/plainObject.js";

/**
 * # mapValues
 *
 * Map the object values into an object.
 *
 * ## Example
 *
 * ```ts
 * obj.mapValues(
 *     {
 *         a: 1,
 *         b: 'two',
 *         c: true,
 *         4: 'nada',
 *     },
 *     value => value === true,
 * )
 * // {
 * //     a: false,
 * //     b: false,
 * //     c: true,
 * //     4: false,
 * // }
 * ```
 */
export function mapValues<const T>(
    obj: plainObject,
    cb: (value: T) => T,
): plainObject {
    return std.pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [key, cb(value)]),
        Object.fromEntries,
    )(undefined);
}
