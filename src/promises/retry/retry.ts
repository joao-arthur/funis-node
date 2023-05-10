import { objectify } from "../objectify/objectify.js";

/**
 * # retry
 *
 * Tries to resolve the promise for the number of especified attempts.
 *
 * ## Example
 *
 * ```ts
 * let i = 1;
 *
 * retry(() => {
 *     i++;
 *     if (i === 5)
 *         return Promise.resolve('Ludwig van Beethoven');
 *     else
 *         return Promise.reject('Johann Sebastian Bach');
 * }, 10) // 'Ludwig van Beethoven'
 * ```
 *
 * ```ts
 * try {
 *     await promises.retry(
 *         Promise.reject('Donatello'),
 *         5
 *     );
 * } catch (e) {
 *     e // 'Donatello'
 * }
 * ```
 */
export async function retry<V, E>(
    cb: () => Promise<V>,
    attempts: number,
): Promise<V | undefined> {
    if (attempts < 1) {
        return undefined;
    }
    for (let i = 1; i <= attempts; i++) {
        const result = await objectify<V, E>(cb());
        switch (result.type) {
            case "resolved":
                return result.value;
            case "rejected":
                if (i === attempts) {
                    throw result.error;
                }
        }
    }

    return undefined;
}
