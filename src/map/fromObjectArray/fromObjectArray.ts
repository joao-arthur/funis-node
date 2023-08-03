/**
 * # fromObjectArray
 *
 * Returns a Map instance with the items, using the passed prop of the objects as keys.
 *
 * ## Example
 *
 * ```ts
 * map.fromObjectArray([], "id") // Map { }
 * ```
 *
 * ```ts
 * map.fromObjectArray(
 *     [
 *         { name: "Alex Lifeson", instrument: "Guitar" },
 *         { name: "Geddy Lee", instrument: "Bass" },
 *         { name: "Neil Peart", instrument: "Drums" },
 *     ],
 *     "instrument",
 * )
 * // {
 * //     Guitar -> { name: "Alex Lifeson", instrument: "Guitar" },
 * //     Bass -> { name: "Geddy Lee", instrument: "Bass" },
 * //     Drums -> { name: "Neil Peart", instrument: "Drums" },
 * // }
 * ```
 */
export function fromObjectArray<const T, const Id extends keyof T>(
    items: readonly T[],
    prop: Id,
): Map<Id, T> {
    const values = new Map();
    for (const item of items) {
        values.set(item[prop], item);
    }
    return values;
}
