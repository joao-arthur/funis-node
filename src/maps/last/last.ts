import { last as arrayLast } from '../../arrays/last/last.js';
import { entries } from '../entries/entries.js';

export function last<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arrayLast(entries(map));
}
