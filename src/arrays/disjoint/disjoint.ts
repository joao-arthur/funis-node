import { self } from '../../standard/self/self.js';
import { groupToArray } from '../groupToArray/groupToArray.js';

export function disjoint<T>(arrs: readonly (readonly T[])[]): readonly T[] {
    return groupToArray(arrs.flat(), self).filter(group => group.length === 1).flat();
}
