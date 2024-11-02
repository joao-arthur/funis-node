import type { PlainObject } from "./object.js";
import { pipe } from "./standard.js";
import { numRandom, numRange } from "./number.js";

/**
 * # arrGroup
 *
 * Group the items by the returned value of the callback. Then return the groups in an array.
 *
 * ## Example
 *
 * ```ts
 * arrGroup(
 *     [
 *         { type: "grass", name: "bulbasaur" },
 *         { type: "fire", name: "charmander" },
 *         { type: "water", name: "squirtle" },
 *         { type: "bug", name: "caterpie" },
 *         { type: "water", name: "psyduck" },
 *     ],
 *     item => item.type,
 * )
 * // [
 * //     [{ type: "grass", name: "bulbasaur" }],
 * //     [{ type: "fire", name: "charmander" }],
 * //     [
 * //         { type: "water", name: "squirtle" },
 * //         { type: "water", name: "psyduck" },
 * //     ],
 * //     [{ type: "bug", name: "caterpie" }],
 * // ]
 * ```
 */
export function arrGroup<K, V>(arr: readonly V[], cb: (item: V) => K): readonly (readonly V[])[] {
    return arrGroupToEntries(arr, cb).map(([, value]) => value);
}

/**
 * # arrGroupToEntries
 *
 * Group the items by the returned value of the callback. Then return the groups in entries.
 *
 * ## Example
 *
 * ```ts
 * arrGroupToEntries(
 *     [
 *         { type: "grass", name: "bulbasaur" },
 *         { type: "fire", name: "charmander" },
 *         { type: "water", name: "squirtle" },
 *         { type: "bug", name: "caterpie" },
 *         { type: "water", name: "psyduck" },
 *     ],
 *     item => item.type,
 * )
 * // [
 * //     ["grass", [{ type: "grass", name: "bulbasaur" }]],
 * //     ["fire", [{ type: "fire", name: "charmander" }]],
 * //     ["water", [
 * //         { type: "water", name: "squirtle" },
 * //         { type: "water", name: "psyduck" },
 * //     ]],
 * //     ["bug", [{ type: "bug", name: "caterpie" }]],
 * // ]
 * ```
 */
export function arrGroupToEntries<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): readonly (readonly [K, readonly V[]])[] {
    return pipe(
        () => arr,
        (items) => items.map(cb),
        arrUnique,
        (keys) => keys.map((key) => [key, arr.filter((item) => cb(item) === key)] as const),
    )(undefined);
}

/**
 * # arrGroupToMap
 *
 * Group the items by the returned value of the callback. Then return the groups in an Map instance.
 *
 * ## Example
 *
 * ```ts
 * arrGroupToMap(
 *     [
 *         { type: "grass", name: "bulbasaur" },
 *         { type: "fire", name: "charmander" },
 *         { type: "water", name: "squirtle" },
 *         { type: "bug", name: "caterpie" },
 *         { type: "water", name: "psyduck" },
 *     ],
 *     item => item.type,
 * )
 * // {
 * //     grass -> [{ type: "grass", name: "bulbasaur" }],
 * //     fire -> [{ type: "fire", name: "charmander" }],
 * //     water -> [
 * //         { type: "water", name: "squirtle" },
 * //         { type: "water", name: "psyduck" },
 * //     ],
 * //     bug -> [{ type: "bug", name: "caterpie" }],
 * // }
 * ```
 */
export function arrGroupToMap<K, V>(arr: readonly V[], cb: (item: V) => K): Map<K, readonly V[]> {
    return new Map(arrGroupToEntries(arr, cb));
}

/**
 * # arrGroupToObj
 *
 * Group the items by the returned value of the callback. Then return the groups in an plain object.
 *
 * ## Example
 *
 * ```ts
 * arrGroupToObj(
 *     [
 *         { type: "grass", name: "bulbasaur" },
 *         { type: "fire", name: "charmander" },
 *         { type: "water", name: "squirtle" },
 *         { type: "bug", name: "caterpie" },
 *         { type: "water", name: "psyduck" },
 *     ],
 *     item => item.type,
 * )
 * // {
 * //     grass: [{ type: "grass", name: "bulbasaur" }],
 * //     fire: [{ type: "fire", name: "charmander" }],
 * //     water: [
 * //         { type: "water", name: "squirtle" },
 * //         { type: "water", name: "psyduck" },
 * //     ],
 * //     bug: [{ type: "bug", name: "caterpie" }],
 * // }
 * ```
 */
export function arrGroupToObj<K, V>(arr: readonly V[], cb: (item: V) => K): PlainObject<V[]> {
    return Object.fromEntries(arrGroupToEntries(arr, cb));
}

/**
 * # arrUnique
 *
 * Returns an array with the unique values.
 *
 * ## Example
 *
 * ```ts
 * arrUnique([1, 1, "john", "john"]) // [1, "john"]
 * arrUnique([42]) // [42]
 * ```
 */
export function arrUnique<const T>(arr: readonly T[]): readonly T[] {
    return Array.from(new Set(arr));
}

/**
 * # arrDisjoint
 *
 * Returns an array with the items that appear in only one array.
 *
 * ## Example
 *
 * ```ts
 * arrDisjoint([[1, 2, 3], [1, 2, 3]]) // []
 * ```
 *
 * ```ts
 * arrDisjoint([[1]]) // [1]
 * arrDisjoint([[false, true], []]) // [false, true]
 * arrDisjoint([[4, 5, 6], [5, 6, 7]]) // [4, 7]
 * arrDisjoint([
 *     ["George", "Paul", "John", "Ringo", "George"],
 *     ["Ringo"],
 *     ["John"],
 * ]) // ["George", "Paul"]
 * ```
 */
export function arrDisjoint<const T>(arrs: readonly (readonly T[])[]): readonly T[] {
    return arrUnique(arrs.flat()).filter((item) => arrOnce(arrs, (arr) => arr.includes(item)));
}

/**
 * # arrIntersect
 *
 * Returns an array with the items that appear in every array.
 *
 * ## Example
 *
 * ```ts
 * arrIntersect([[false, true], []]) // []
 * arrIntersect([[1, 2, 3], [4, 5, 6]]) // []
 * ```
 *
 * ```ts
 * arrIntersect([[""]]) // [""]
 * arrIntersect([[4, 5, 6], [5, 6, 7]]) // [5, 6]
 * arrIntersect([
 *     ["George", "Paul", "John", "Ringo", "Ringo"],
 *     ["Ringo"],
 *     ["Ringo", "John"],
 * ]) // ["Ringo"]
 * ```
 */
export function arrIntersect<const T>(arrs: readonly (readonly T[])[]): readonly T[] {
    return arrUnique(arrs.flat()).filter((item) => arrs.every((arr) => arr.includes(item)));
}

/**
 * # arrCombinate
 *
 * Returns an array with the non-repeating combination of the items.
 *
 * ## Example
 *
 * ```ts
 * arrCombinate([]) // []
 * arrCombinate([10]) // []
 * ```
 *
 * ```ts
 * arrCombinate([10, 20, 30, 40, 50])
 * // [
 * //     [10, 20],
 * //     [10, 30],
 * //     [10, 40],
 * //     [10, 50],
 * //     [20, 30],
 * //     [20, 40],
 * //     [20, 50],
 * //     [30, 40],
 * //     [30, 50],
 * //     [40, 50],
 * // ]
 * ```
 */
export function arrCombinate<const T>(arr: readonly T[]): readonly (readonly [T, T])[] {
    const result: [T, T][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[i], arr[j]]);
        }
    }
    return result;
}

/**
 * # arrOnce
 *
 * Returns true if the callback returns true once. Returns false otherwise.
 *
 * ## Example
 *
 * ```ts
 * arrOnce(["Axl", "Slash", "Duff", "Buckethead"], item => item === "Roses") // false
 * arrOnce(["Axl", "Slash", "Duff", "Buckethead"], item => item === "Buckethead") // true
 * arrOnce(["Axl", "Slash", "Duff", "Buckethead"], item => item.length > 2) // false
 * ```
 */
export function arrOnce<const T>(
    arr: readonly T[],
    cb: (item: T, index: number, arr: readonly T[]) => boolean,
): boolean {
    return arr.map(cb).filter(Boolean).length === 1;
}

/**
 * # arrRepeat
 *
 * Returns a new array with the all the items repeated the specified number of times.
 *
 * ## Example
 *
 * ```ts
 * arrRepeat([0, 1, 2], 0) // []
 * arrRepeat([0, 1, 2], 1) // [0, 1, 2]
 * arrRepeat([0, 1, 2], 2) // [0, 1, 2, 0, 1, 2]
 * ```
 */
export function arrRepeat<const T>(arr: readonly T[], times: number): readonly T[] {
    return numRange(1, times).flatMap(() => arr);
}

/**
 * # arrRandom
 *
 * Returns a random item of the array.
 *
 * ## Example
 *
 * ```ts
 * arrRandom([]) // undefined
 * ```
 *
 * ```ts
 * arrRandom([true]) // [true]
 * arrRandom(false, 0, "n") // false | 0 | "n"
 * ```
 */
export function arrRandom<const T>(arr: readonly T[]): T | undefined {
    return arr[numRandom(0, arr.length - 1)];
}
