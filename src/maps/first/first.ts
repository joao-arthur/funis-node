import { first as arrayFirst } from '../../arrays/first/first.js';
import { entries } from '../entries/entries.js';

export function first<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arrayFirst(entries(map));
}
