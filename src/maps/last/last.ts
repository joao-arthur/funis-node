import { last as arrayLast } from '../../arrays/last/last.js';
import { entries } from '../entries/entries.js';

/**
 * # maps.last
 *
 * Returns the last entry of the map.
 *
 * ## Example
 *
 * ```ts
 * maps.last(new Map()) // undefined
 * ```
 *
 * ```ts
 * maps.last(
 *     new Map([
 *         [1, { name: 'Paul McCartney' }],
 *         [2, { name: 'John Lennon' }],
 *     ])
 * ) // [2, { name: 'John Lennon' }]
 * ```
 */
export function last<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arrayLast(entries(map));
}
