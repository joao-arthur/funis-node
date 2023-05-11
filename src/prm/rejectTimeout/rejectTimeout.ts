/**
 * # rejectTimeout
 *
 * Returns a promise that rejects after the timeout.
 *
 * ## Example
 *
 * ```ts
 * try {
 *     await prm.resolveTimeout(
 *         'Hello, promise!',
 *         500
 *     );
 * } catch (e) {
 *     e // 'Hello, promise!'
 * }
 * ```
 */
export function rejectTimeout<const T>(
    valueToReject: T,
    timeout: number,
): Promise<T> {
    return new Promise((_, reject) => {
        globalThis.setTimeout(() => reject(valueToReject), timeout);
    });
}
