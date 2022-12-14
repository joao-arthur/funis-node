import { pipe } from '../../standard/pipe/pipe.js';
import { plainObject } from '../../types/plainObject.js';

export function mapValues<T>(
    obj: plainObject<T>,
    cb: (value: T) => T,
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        entries => entries.map(([key, value]) => [key, cb(value)]),
        entries => Object.fromEntries(entries),
    )(obj);
}
