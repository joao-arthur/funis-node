import { maps } from '../../index.js';
import { plainObject } from '../../types/plainObject.js';

export function fromMap<T>(
    map: Map<string | number, T>,
): plainObject<T> {
    return Object.fromEntries(maps.entries(map));
}
