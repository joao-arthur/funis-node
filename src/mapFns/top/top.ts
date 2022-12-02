import { arrayFns } from '../../arrayFns';
import { entries } from '../entries';

type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
}

export function top<K, V>(instance: Map<K, V>): returnType<K, V> | undefined {
    const lastEntry = arrayFns.last(entries(instance));
    if (!lastEntry)
        return undefined;
    const [key, value] = lastEntry;

    return { key, value };
}
