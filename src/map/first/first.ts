import { arr } from "../../arr/mod.js";
import { entries } from "../entries/entries.js";

/**
 * # first
 *
 * Returns the first entry of the map.
 *
 * ## Example
 *
 * ```ts
 * map.first(new Map()) // undefined
 * ```
 *
 * ```ts
 * map.first(
 *     new Map([
 *         [1, { name: 'Paul McCartney' }],
 *         [2, { name: 'John Lennon' }],
 *     ])
 * ) // [1, { name: 'Paul McCartney' }]
 * ```
 */
export function first<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arr.first(entries(map));
}
