import { plainObject } from '../../types/plainObject';

export function serialize<T>(object: plainObject<T>): string {
    function valueToString(value: T): string {
        if (value instanceof Date)
            return value.toISOString();
        if (value instanceof Array)
            return value.join(', ');
        return String(value);
    }

    const entries = Object
        .entries(object)
        .filter(([, value]) => typeof value !== 'function')
        .map(([key, value]) => `${key}: ${valueToString(value)}`).join(', ');

    return entries.length ? `{ ${entries} }` : '{ }';
}
