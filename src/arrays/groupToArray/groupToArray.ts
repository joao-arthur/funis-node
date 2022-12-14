import { groupToEntries } from '../groupToEntries/groupToEntries.js';

export function groupToArray<K, V>(
    arr: readonly V[], cb: (item: V) => K,
): readonly (readonly V[])[] {
    return groupToEntries(arr, cb).map(([_, value]) => value);
}
