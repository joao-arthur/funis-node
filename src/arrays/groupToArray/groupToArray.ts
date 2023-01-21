import { groupToEntries } from '../groupToEntries/groupToEntries.js';

/**
 * # arrays.groupToArray
 *
 * Group the items by the returned value of the callback. Then return the groups in an array.
 *
 * ## Example
 *
 * ```ts
 * arrays.groupToArray(
 *     [
 *         { type: 'grass', name: 'bulbasaur' },
 *         { type: 'fire', name: 'charmander' },
 *         { type: 'water', name: 'squirtle' },
 *         { type: 'bug', name: 'caterpie' },
 *         { type: 'water', name: 'psyduck' },
 *     ],
 *     item => item.type,
 * )
 * // [
 * //     [{ type: 'grass', name: 'bulbasaur' }],
 * //     [{ type: 'fire', name: 'charmander' }],
 * //     [
 * //         { type: 'water', name: 'squirtle' },
 * //         { type: 'water', name: 'psyduck' },
 * //     ],
 * //     [{ type: 'bug', name: 'caterpie' }],
 * // ]
 * ```
 */
export function groupToArray<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): readonly (readonly V[])[] {
    return groupToEntries(arr, cb).map(([, value]) => value);
}
