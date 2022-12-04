import { plainObject } from '../../types/plainObject.js';

export function prefix<T>(object: plainObject<T>, prefixValue: string): plainObject<T> {
    return Object.fromEntries(
        Object
            .entries(object)
            .map(([key, value]) => [`${prefixValue}${key}`, value]),
    );
}
