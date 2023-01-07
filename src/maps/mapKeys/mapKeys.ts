import { pipe } from '../../standard/pipe/pipe.js';
import { entries } from '../entries/entries.js';

export function mapKeys<K, V>(
    map: Map<K, V>,
    cb: (key: K) => K,
): Map<K, V> {
    return pipe(
        (map: Map<K, V>) => entries(map),
        entries => entries.map(
            ([key, value]) => [cb(key), value] as const,
        ),
        entries => new Map(entries),
    )(map);
}
