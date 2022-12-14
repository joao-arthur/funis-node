import { first as arrayFirst } from '../../arrays/first/first.js';
import { entries } from '../entries/entries.js';

type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
}

export function first<K, V>(
    map: Map<K, V>,
): returnType<K, V> | undefined {
    const lastEntry = arrayFirst(entries(map));
    if (!lastEntry)
        return undefined;
    const [key, value] = lastEntry;

    return { key, value };
}
