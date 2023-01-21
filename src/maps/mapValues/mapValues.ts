import { pipe } from '../../standard/pipe/pipe.js';
import { entries } from '../entries/entries.js';

/**
 * # maps.mapValues
 *
 * Map the _Map instance_ values into a new _Map instance_.
 *
 * ## Example
 *
 * ```ts
 * maps.mapValues(
 *     new Map([
 *         ['a', 1],
 *         ['b', 'two'],
 *         ['c', true],
 *         [4, 'nada'],
 *     ]),
 *     value => value === true,
 * )
 * // {
 * //     a -> false,
 * //     b -> false,
 * //     c -> true,
 * //     4 -> false,
 * // }
 * ```
 */
export function mapValues<K, V>(
    map: Map<K, V>,
    cb: (value: V) => V,
): Map<K, V> {
    return pipe(
        (map: Map<K, V>) => entries(map),
        entries =>
            entries.map(
                ([key, value]) => [key, cb(value)] as const,
            ),
        entries => new Map(entries),
    )(map);
}
