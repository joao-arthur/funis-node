/**
 * # combinations
 *
 * Returns an array with the non-repeating combination of the items.
 *
 * ## Example
 *
 * ```ts
 * arr.combinations([]) // []
 * arr.combinations([10]) // []
 * ```
 *
 * ```ts
 * arr.combinations([10, 20, 30, 40, 50])
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
export function combinations<const T>(
    arr: readonly T[],
): readonly (readonly [T, T])[] {
    const result: [T, T][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[i], arr[j]]);
        }
    }
    return result;
}
