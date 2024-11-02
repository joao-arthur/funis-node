import { mapEntries } from "./map.js";
import { PlainObject } from "./types.js";
import { arrCombinate, arrGroup, arrUnique } from "./array.js";
import { pipe, self } from "./standard.js";

/**
 * # objFromMap
 *
 * Returns an object with the same key-value pairs of the passed Map instance.
 *
 * ## Example
 *
 * ```ts
 * objFromMap(new Map([])) // { }
 * ```
 *
 * ```ts
 * objFromMap(
 *     new Map([
 *         ["Paul", "Bass"],
 *         ["John", "Guitar"],
 *         ["George", "Guitar"],
 *         ["Ringo", "Drums"],
 *     ])
 * )
 * // {
 * //     Paul: "Bass",
 * //     John: "Guitar",
 * //     George: "Guitar",
 * //     Ringo: "Drums",
 * // }
 * ```
 */
export function objFromMap<const T>(
    map: Map<string | number, T>,
): PlainObject<T> {
    return Object.fromEntries(mapEntries(map));
}

/**
 * # objMapEntries
 *
 * Map the object entries into an object.
 *
 * ## Example
 *
 * ```ts
 * objMapEntries(
 *     {
 *         a: 1,
 *         b: "two",
 *         c: true,
 *         4: "nada",
 *     },
 *     ([key, value]) => [`key_${key}`, `value_${value}`],
 * )
 * // {
 * //     key_a: "value_1",
 * //     key_b: "value_two",
 * //     key_c: "value_true",
 * //     key_4: "value_nada",
 * // }
 * ```
 */
export function objMapEntries(
    obj: PlainObject,
    cb: (
        entry: readonly [string | number, unknown],
    ) => readonly [string | number, unknown],
): PlainObject {
    return pipe(
        () => obj,
        (obj: PlainObject) => Object.entries(obj),
        (entries) => entries.map(cb),
        Object.fromEntries,
    )(undefined);
}

/**
 * # objMapKeys
 *
 * Map the object keys into an object.
 *
 * ## Example
 *
 * ```ts
 * objMapKeys(
 *     {
 *         a: 1,
 *         b: "two",
 *         c: true,
 *         4: "nada",
 *     },
 *     key => `v2_${key}_test`,
 * )
 * // {
 * //     v2_a_test: 1,
 * //     v2_b_test: "two",
 * //     v2_c_test: true,
 * //     v2_4_test: "nada",
 * // }
 * ```
 */
export function objMapKeys(
    obj: PlainObject,
    cb: (key: string | number) => string | number,
): PlainObject {
    return pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [cb(key), value]),
        Object.fromEntries,
    )(undefined);
}

/**
 * # objMapValues
 *
 * Map the object values into an object.
 *
 * ## Example
 *
 * ```ts
 * objMapValues(
 *     {
 *         a: 1,
 *         b: "two",
 *         c: true,
 *         4: "nada",
 *     },
 *     value => value === true,
 * )
 * // {
 * //     a: false,
 * //     b: false,
 * //     c: true,
 * //     4: false,
 * // }
 * ```
 */
export function objMapValues<const T>(
    obj: PlainObject,
    cb: (value: T) => T,
): PlainObject {
    return pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [key, cb(value)]),
        Object.fromEntries,
    )(undefined);
}

/**
 * # objOmit
 *
 * Creates an object without the passed keys.
 *
 * ## Example
 *
 * ```ts
 * objOmit(
 *     { animal: "dog", species: "Canis lupus", age: 5 },
 *     [],
 * ) // { animal: "dog", species: "Canis lupus", age: 5 }
 * ```
 *
 * ```ts
 * objOmit(
 *     { animal: "dog", species: "Canis lupus", age: 5 },
 *     ["animal"],
 * ) // { species: "Canis lupus", age: 5 }
 * ```
 */
export function objOmit<const T>(
    obj: PlainObject<T>,
    keys: readonly string[],
): PlainObject<T> {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
}

/**
 * # objPick
 *
 * Creates an object with only the passed keys.
 *
 * ## Example
 *
 * ```ts
 * objPick(
 *     { animal: "dog", species: "Canis lupus", age: 5 },
 *     [],
 * ) // { }
 * ```
 *
 * ```ts
 * objPick(
 *     { animal: "dog", species: "Canis lupus", age: 5 },
 *     ["animal"],
 * ) // { animal: "dog" }
 * ```
 */
export function objPick<const T>(
    obj: PlainObject<T>,
    keys: readonly string[],
): PlainObject<T> {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}

/**
 * # objDisjoint
 *
 * Returns an object with the entries which the key appears in only one of them.
 *
 * ## Example
 *
 * ```ts
 * objDisjoint([
 *     { name: "Steve Harris", country: "UK" },
 *     { name: "Megadeth", foundation: 1983 },
 * ]) // { country: "UK", foundation: 1983 }
 * ```
 */
export function objDisjoint(
    objs: readonly PlainObject[],
): PlainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = arrUnique(
        arrGroup(
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

/**
 * # objIntersect
 *
 * Returns an object with the entries that appear in all of them.
 *
 * ## Example
 *
 * ```ts
 * objIntersect([
 *     { name: "Cliff Burton", band: "Metallica", country: "US" },
 *     { name: "James Hetfield", band: "Metallica", country: "US" },
 *     { name: "Kirk Hammett", band: "Metallica", country: "US" },
 * ]) // { band: "Metallica", country: "US" }
 * ```
 */
export function objIntersect(
    objs: readonly PlainObject[],
): PlainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = arrUnique(
        arrGroup(allEntries.map(([key]) => key), self)
            .filter((group) => group.length === objs.length)
            .flat(),
    );
    return Object.fromEntries(
        uniqueKeys
            .filter((key) =>
                arrUnique(
                    allEntries
                        .filter(([entryKey]) => entryKey === key)
                        .map(([, value]) => value),
                ).length === 1
            ).map((key) => [key, allEntriesObject[key]]),
    );
}

/**
 * # objSerialize
 *
 * Serializes the plain properties to a json-like format that is friendly to read.
 *
 * ## Example
 *
 * ```ts
 * objSerialize({
 *     name: "Paul",
 *     numberOfBands: 4,
 *     alive: true,
 * }) // "{ name: Paul, numberOfBands: 4, alive: true }"
 * ```
 *
 * ```ts
 * objSerialize({
 *     empty: [],
 *     oneValue: [1],
 *     multiValue: [true, false, "zaphod", 42n],
 * }) // "{ empty: , oneValue: 1, multiValue: true, false, zaphod, 42 }"
 * ```
 *
 * ```ts
 * class Dog {
 *     constructor(private readonly name: string) { }
 *
 *     bark(): string {
 *         return `wolf! wolf! I'm ${this.name}!`;
 *     }
 * }
 *
 * objSerialize(
 *     new Dog("Rex") as unknown as PlainObject
 * ) // "{ name: Rex }"
 * ```
 */
export function objSerialize<const T>(obj: PlainObject<T>): string {
    function valueToString(value: T): string {
        if (value instanceof Date) {
            return value.toISOString();
        }
        if (value instanceof Array) {
            return value.join(", ");
        }
        return String(value);
    }
    const entries = Object
        .entries(obj)
        .filter(([, value]) => typeof value !== "function")
        .map(([key, value]) => `${key}: ${valueToString(value)}`)
        .join(", ");
    return entries.length ? `{ ${entries} }` : "{ }";
}

/**
 * # objSerializesToSame
 *
 * Returns whether the [serialized](./serialize.md) version of every object are equal or not.
 *
 * ## Example
 *
 * ```ts
 * objSerializesToSame([
 *     { x: 10.12, y: -1.53 },
 *     { x: 10.12, y: -1.53 },
 *     { x: 10.12, y: -1.53 },
 * ]) // true
 * ```
 *
 * ```ts
 * class CartesianPoint {
 *     constructor(
 *         private readonly x: number,
 *         private readonly y: number,
 *     ) { }
 * }
 *
 * objSerializesToSame([
 *     new CartesianPoint(5.25, 7.77) as unknown as PlainObject,
 *     { x: 5.25, y: 7.77 },
 * ]) // true
 * ```
 */
export function objSerializesToSame(
    objs: PlainObject[],
): boolean {
    return arrCombinate(objs).every(([a, b]) => objSerialize(a) === objSerialize(b));
}
