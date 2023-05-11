import { arr } from "../../arr/mod.js";
import { self } from "../../std/self/self.js";
import { plainObject } from "../../types/plainObject.js";

/**
 * # disjoint
 *
 * Returns an object with the entries which the key appears in only one of them.
 *
 * ## Example
 *
 * ```ts
 * obj.disjoint([
 *     { name: 'Steve Harris', country: 'UK' },
 *     { name: 'Megadeth', foundation: 1983 },
 * ]) // { country: 'UK', foundation: 1983 }
 * ```
 */
export function disjoint(
    objs: readonly plainObject[],
): plainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = arr.unique(
        arr.groupToArray(
            allEntries.map(([key]) => key),
            self,
        )
            .filter((group) => group.length === 1)
            .flat(),
    );
    return Object.fromEntries(
        uniqueKeys.map((key) => [key, allEntriesObject[key]]),
    );
}
