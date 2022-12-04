import { arrayFns } from '../../arrays';
import { entries } from '../entries';

type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
}

export function bottom<K, V>(instance: Map<K, V>): returnType<K, V> | undefined {
    const lastEntry = arrayFns.first(entries(instance));
    if (!lastEntry)
        return undefined;
    const [key, value] = lastEntry;

    return { key, value };
}
