import { plainObject } from "../../types/plainObject.js";

/**
 * # fromObject
 *
 * Returns a Map instance with the same key-value pairs of the passed object.
 *
 * ## Example
 *
 * ```ts
 * map.fromObject({}) // Map { }
 * ```
 *
 * ```ts
 * map.fromObject({
 *     Paul: 'Bass',
 *     John: 'Guitar',
 *     George: 'Guitar',
 *     Ringo: 'Drums',
 * })
 * // {
 * //     Paul -> 'Bass',
 * //     John -> 'Guitar',
 * //     George -> 'Guitar',
 * //     Ringo -> 'Drums',
 * // }
 * ```
 */
export function fromObject<const T>(
    obj: plainObject<T>,
): Map<string | number, T> {
    return new Map(Object.entries(obj));
}
