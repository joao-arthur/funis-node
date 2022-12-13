import { pipe } from '../../standard/pipe/pipe.js';
import { plainObject } from '../../types/plainObject.js';

export function mapKeys<T>(obj: plainObject<T>, cb: (key: string | number) => string | number): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        entries => entries.map(([key, value]) => [cb(key), value]),
        entries => Object.fromEntries(entries),
    )(obj);
}
