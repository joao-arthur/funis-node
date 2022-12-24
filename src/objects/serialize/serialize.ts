import { plainObject } from '../../types/plainObject.js';

export function serialize<T>(obj: plainObject<T>): string {
    function valueToString(value: T): string {
        if (value instanceof Date)
            return value.toISOString();
        if (value instanceof Array)
            return value.join(', ');

        return String(value);
    }

    const entries = Object
        .entries(obj)
        .filter(([, value]) => typeof value !== 'function')
        .map(
            ([key, value]) => `${key}: ${valueToString(value)}`,
        )
        .join(', ');

    return entries.length ? `{ ${entries} }` : '{ }';
}
