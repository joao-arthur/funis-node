/**
 * # promises.resolveTimeout
 *
 * Returns a promise that resolves after the timeout.
 *
 * ## Example
 *
 * ```ts
 * await promises.resolveTimeout(
 *     'Hello, promise!',
 *     500
 * ) // 'Hello, promise!'
 * ```
 */
export function resolveTimeout<T>(
    valueToResolve: T,
    timeout: number,
): Promise<T> {
    return new Promise((resolve) => {
        globalThis.setTimeout(() => resolve(valueToResolve), timeout);
    });
}
