import { pipe } from "../../standard/pipe/pipe.js";
import { plainObject } from "../../types/plainObject.js";

/**
 * # objects.mapValues
 *
 * Map the object values into an object.
 *
 * ## Example
 *
 * ```ts
 * objects.mapValues(
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
export function mapValues<T>(
    obj: plainObject<T>,
    cb: (value: T) => T,
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        (entries) => entries.map(([key, value]) => [key, cb(value)]),
        Object.fromEntries,
    )(obj);
}
