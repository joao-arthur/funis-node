import { pipe } from '../../standard/pipe/pipe.js';
import { plainObject } from '../../types/plainObject.js';

export function mapEntries<T>(
    obj: plainObject<T>,
    cb: (
        entry: readonly [string | number, T]
    ) => readonly [string | number, T],
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        entries => entries.map(cb),
        Object.fromEntries,
    )(obj);
}
