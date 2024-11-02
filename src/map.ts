import { PlainObject } from "./types.js";
import { pipe } from "./standard.js";

/**
 * # mapEntries
 *
 * Map the _Map instance_ entries into a new _Map instance_.
 *
 * ## Example
 *
 * ```ts
 * map.mapEntries(
 *     new Map([
 *         ["a", 1],
 *         ["b", "two"],
 *         ["c", true],
 *         [4, "nada"],
 *     ]),
 *     ([key, value]) => [`key_${key}`, `value_${value}`],
 * )
 * // {
 * //     key_a -> "value_1",
 * //     key_b -> "value_two",
 * //     key_c -> "value_true",
 * //     key_4 -> "value_nada",
 * // }
 * ```
 */
export function mapMapEntries<K, V>(
    map: Map<K, V>,
    cb: (entry: readonly [K, V]) => readonly [K, V],
): Map<K, V> {
    return pipe(
        () => map,
        mapEntries,
        (entries) => entries.map(cb),
        (entries) => new Map(entries),
    )(undefined);
}

/**
 * # mapKeys
 *
 * Map the _Map instance_ keys into a new _Map instance_.
 *
 * ## Example
 *
 * ```ts
 * map.mapKeys(
 *     new Map([
 *         ["a", 1],
 *         ["b", "two"],
 *         ["c", true],
 *         [4, "nada"],
 *     ]),
 *     key => `v2_${key}_test`,
 * )
 * // {
 * //     v2_a_test -> 1,
 * //     v2_b_test -> "two",
 * //     v2_c_test -> true,
 * //     v2_4_test -> "nada",
 * // }
 * ```
 */
export function mapMapKeys<K, V>(
    map: Map<K, V>,
    cb: (key: K) => K,
): Map<K, V> {
    return pipe(
        () => map,
        (map) => mapEntries(map),
        (entries) => entries.map(([key, value]) => [cb(key), value] as const),
        (entries) => new Map(entries),
    )(undefined);
}

/**
 * # mapValues
 *
 * Map the _Map instance_ values into a new _Map instance_.
 *
 * ## Example
 *
 * ```ts
 * map.mapValues(
 *     new Map([
 *         ["a", 1],
 *         ["b", "two"],
 *         ["c", true],
 *         [4, "nada"],
 *     ]),
 *     value => value === true,
 * )
 * // {
 * //     a -> false,
 * //     b -> false,
 * //     c -> true,
 * //     4 -> false,
 * // }
 * ```
 */
export function mapMapValues<K, V>(
    map: Map<K, V>,
    cb: (value: V) => V,
): Map<K, V> {
    return pipe(
        () => map,
        (map: Map<K, V>) => mapEntries(map),
        (entries) => entries.map(([key, value]) => [key, cb(value)] as const),
        (entries) => new Map(entries),
    )(undefined);
}

/**
 * # entries
 *
 * Returns the entries of the Map instance.
 *
 * ## Example
 *
 * ```ts
 * map.entries(new Map()) // []
 * ```
 *
 * ```ts
 * map.entries(
 *     new Map([
 *         [1, { name: "Paul McCartney" }],
 *         [2, { name: "George Harrison" }],
 *     ])
 * )
 * // [
 * //     [1, { name: "Paul McCartney" }],
 * //     [2, { name: "George Harrison" }],
 * // ]
 * ```
 */
export function mapEntries<K, V>(
    map: Map<K, V>,
): readonly (readonly [K, V])[] {
    return Array.from(map.entries());
}

/**
 * # keys
 *
 * Returns the keys of the Map instance entries.
 *
 * ## Example
 *
 * ```ts
 * map.keys(new Map()) // []
 * ```
 *
 * ```ts
 * map.keys(
 *     new Map([
 *         [1, { name: "Paul McCartney" }],
 *         [2, { name: "George Harrison" }],
 *     ])
 * ) // [1, 2]
 * ```
 */
export function mapKeys<K, V>(map: Map<K, V>): readonly K[] {
    return Array.from(map.keys());
}


/**
 * # values
 *
 * Returns the values of the Map instance entries.
 *
 * ## Example
 *
 * ```ts
 * map.values(new Map()) // []
 * ```
 *
 * ```ts
 * map.values(
 *     new Map([
 *         [1, { name: "Paul McCartney" }],
 *         [2, { name: "George Harrison" }],
 *     ])
 * )
 * // [
 * //     { name: "Paul McCartney" },
 * //     { name: "George Harrison" },
 * // ]
 * ```
 */
export function mapValues<K, V>(map: Map<K, V>): readonly V[] {
    return Array.from(map.values());
}

/**
 * # fromObject
 *
 * Returns a Map instance with the same key-value pairs of the passed object.
 *
 * ## Example
 *
 * ```ts
 * map.fromObject({}) // Map { }
 * ```
 *
 * ```ts
 * map.fromObject({
 *     Paul: "Bass",
 *     John: "Guitar",
 *     George: "Guitar",
 *     Ringo: "Drums",
 * })
 * // {
 * //     Paul -> "Bass",
 * //     John -> "Guitar",
 * //     George -> "Guitar",
 * //     Ringo -> "Drums",
 * // }
 * ```
 */
export function mapFromObject<const T>(
    obj: PlainObject<T>,
): Map<string | number, T> {
    return new Map(Object.entries(obj));
}
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
export function mapFromObjectArray<const T, const Id extends keyof T>(
    items: readonly T[],
    prop: Id,
): Map<T[Id], T> {
    const values = new Map();
    for (const item of items) {
        values.set(item[prop], item);
    }
    return values;
}
