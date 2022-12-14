import { last as arrayLast } from '../../arrays/last/last.js';
import { entries } from '../entries/entries.js';

type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
}

export function last<K, V>(
    map: Map<K, V>,
): returnType<K, V> | undefined {
    const lastEntry = arrayLast(entries(map));
    if (!lastEntry)
        return undefined;
    const [key, value] = lastEntry;

    return { key, value };
}
