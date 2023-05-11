import { random as randomNum } from "../../num/random/random.js";

/**
 * # random
 *
 * Returns a random character of the array.
 *
 * ## Example
 *
 * ```ts
 * arr.random([]) // undefined
 * ```
 *
 * ```ts
 * arr.random([true]) // [true]
 * arr.random(false, 0, 'n') // false | 0 | 'n'
 * ```
 */
export function random<const T>(arr: readonly T[]): T | undefined {
    return arr[randomNum(0, arr.length - 1)];
}
