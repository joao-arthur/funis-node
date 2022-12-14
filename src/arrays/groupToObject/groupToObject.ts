import { plainObject } from '../../types/plainObject.js';
import { groupToEntries } from '../groupToEntries/groupToEntries.js';

export function groupToObject<K, V>(
    arr: readonly V[], cb: (item: V) => K,
): plainObject<V> {
    return Object.fromEntries(groupToEntries(arr, cb));
}
