import { pipe } from '../../standard/pipe/pipe.js';
import { plainObject } from '../../types/plainObject.js';

export function mapEntries<T>(
    obj: plainObject<T>,
    cb: (entry: [string | number, T]) => [string | number, T],
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        entries => entries.map(cb),
        entries => Object.fromEntries(entries),
    )(obj);
}
