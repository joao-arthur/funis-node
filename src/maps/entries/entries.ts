/**
 * # maps.entries
 *
 * Returns the entries of the Map instance.
 *
 * ## Example
 *
 * ```ts
 * maps.entries(new Map()) // []
 * ```
 *
 * ```ts
 * maps.entries(
 *     new Map([
 *         [1, { name: 'Paul McCartney' }],
 *         [2, { name: 'George Harrison' }],
 *     ])
 * )
 * // [
 * //     [1, { name: 'Paul McCartney' }],
 * //     [2, { name: 'George Harrison' }],
 * // ]
 * ```
 */
export function entries<K, V>(
    map: Map<K, V>,
): readonly (readonly [K, V])[] {
    return Array.from(map.entries());
}
