import { groupToArray } from "../../arr/groupToArray/groupToArray.js";
import { unique } from "../../arr/unique/unique.js";
import { self } from "../../std/self/self.js";
import { plainObject } from "../../types/plainObject.js";

/**
 * # intersect
 *
 * Returns an object with the entries that appear in all of them.
 *
 * ## Example
 *
 * ```ts
 * objects.intersect([
 *     { name: 'Cliff Burton', band: 'Metallica', country: 'US' },
 *     { name: 'James Hetfield', band: 'Metallica', country: 'US' },
 *     { name: 'Kirk Hammett', band: 'Metallica', country: 'US' },
 * ]) // { band: 'Metallica', country: 'US' }
 * ```
 */
export function intersect(
    objs: readonly plainObject[],
): plainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = unique(
        groupToArray(
            allEntries.map(([key]) => key),
            self,
        )
            .filter((group) => group.length === objs.length)
            .flat(),
    );
    return Object.fromEntries(
        uniqueKeys
            .filter((key) =>
                unique(
                    allEntries
                        .filter(([entryKey]) => entryKey === key)
                        .map(([, value]) => value),
                ).length === 1
            ).map((key) => [key, allEntriesObject[key]]),
    );
}
