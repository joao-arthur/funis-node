import { groupToEntries } from "../groupToEntries/groupToEntries.js";

/**
 * # groupToMap
 *
 * Group the items by the returned value of the callback. Then return the groups in an Map instance.
 *
 * ## Example
 *
 * ```ts
 * arr.groupToMap(
 *     [
 *         { type: 'grass', name: 'bulbasaur' },
 *         { type: 'fire', name: 'charmander' },
 *         { type: 'water', name: 'squirtle' },
 *         { type: 'bug', name: 'caterpie' },
 *         { type: 'water', name: 'psyduck' },
 *     ],
 *     item => item.type,
 * )
 * // {
 * //     grass -> [{ type: 'grass', name: 'bulbasaur' }],
 * //     fire -> [{ type: 'fire', name: 'charmander' }],
 * //     water -> [
 * //         { type: 'water', name: 'squirtle' },
 * //         { type: 'water', name: 'psyduck' },
 * //     ],
 * //     bug -> [{ type: 'bug', name: 'caterpie' }],
 * // }
 * ```
 */
export function groupToMap<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): Map<K, readonly V[]> {
    return new Map(groupToEntries(arr, cb));
}
