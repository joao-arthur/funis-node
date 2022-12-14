import { groupToEntries } from '../groupToEntries/groupToEntries.js';

export function groupToMap<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): Map<K, readonly V[]> {
    return new Map(groupToEntries(arr, cb));
}
