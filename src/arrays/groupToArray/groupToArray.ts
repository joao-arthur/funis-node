import { pipe } from '../../standard/pipe/pipe.js';
import { unique } from '../unique/unique.js';

export function groupToArray<K, V>(arr: readonly V[], cb: (item: V) => K): readonly (readonly V[])[] {
    return pipe(
        (items: readonly V[]) => items.map(cb),
        unique,
        keys => keys.map(key => arr.filter(item => cb(item) === key)),
    )(arr);
}
