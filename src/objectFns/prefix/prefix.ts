import { plainObject } from '../../types/plainObject';

export function prefix(object: plainObject, prefixValue: string) {
    return Object.fromEntries(
        Object
            .entries(object)
            .map(([key, value]) => [`${prefixValue}${key}`, value]),
    );
}
