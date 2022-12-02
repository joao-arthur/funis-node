import { plainObject } from '../../types/plainObject';

export function suffix(object: plainObject, suffixValue: string) {
    return Object.fromEntries(
        Object
            .entries(object)
            .map(([key, value]) => [`${key}${suffixValue}`, value]),
    );
}
