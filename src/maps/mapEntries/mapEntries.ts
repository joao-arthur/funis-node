import { pipe } from "../../standard/pipe/pipe.js";
import { entries } from "../entries/entries.js";

/**
 * # mapEntries
 *
 * Map the _Map instance_ entries into a new _Map instance_.
 *
 * ## Example
 *
 * ```ts
 * maps.mapEntries(
 *     new Map([
 *         ['a', 1],
 *         ['b', 'two'],
 *         ['c', true],
 *         [4, 'nada'],
 *     ]),
 *     ([key, value]) => [`key_${key}`, `value_${value}`],
 * )
 * // {
 * //     key_a -> 'value_1',
 * //     key_b -> 'value_two',
 * //     key_c -> 'value_true',
 * //     key_4 -> 'value_nada',
 * // }
 * ```
 */
export function mapEntries<K, V>(
    map: Map<K, V>,
    cb: (entry: readonly [K, V]) => readonly [K, V],
): Map<K, V> {
    return pipe(
        () => map,
        entries,
        (entries) => entries.map(cb),
        (entries) => new Map(entries),
    )(undefined);
}
