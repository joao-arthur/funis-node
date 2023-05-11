/**
 * # keys
 *
 * Returns the keys of the Map instance entries.
 *
 * ## Example
 *
 * ```ts
 * map.keys(new Map()) // []
 * ```
 *
 * ```ts
 * map.keys(
 *     new Map([
 *         [1, { name: 'Paul McCartney' }],
 *         [2, { name: 'George Harrison' }],
 *     ])
 * ) // [1, 2]
 * ```
 */
export function keys<K, V>(map: Map<K, V>): readonly K[] {
    return Array.from(map.keys());
}
