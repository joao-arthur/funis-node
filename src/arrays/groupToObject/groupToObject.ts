import { pipe } from '../../standard/pipe/pipe.js';
import { plainObject } from '../../types/plainObject.js';
import { unique } from '../unique/unique.js';

export function groupToObject<K, V>(arr: readonly V[], cb: (item: V) => K): plainObject<V> {
    return pipe(
        (items: readonly V[]) => items.map(cb),
        unique,
        keys => keys.map(key => [key, arr.filter(item => cb(item) === key)] as const),
        groups => Object.fromEntries(groups),
    )(arr);
}
