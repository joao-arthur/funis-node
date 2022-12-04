import { plainObject } from '../../types/plainObject';

export function suffix<T>(object: plainObject<T>, suffixValue: string): plainObject<T> {
    return Object.fromEntries(
        Object
            .entries(object)
            .map(([key, value]) => [`${key}${suffixValue}`, value]),
    );
}
