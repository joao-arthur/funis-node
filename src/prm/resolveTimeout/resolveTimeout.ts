/**
 * # resolveTimeout
 *
 * Returns a promise that resolves after the timeout.
 *
 * ## Example
 *
 * ```ts
 * await prm.resolveTimeout(
 *     'Hello, promise!',
 *     500
 * ) // 'Hello, promise!'
 * ```
 */
export function resolveTimeout<const T>(
    valueToResolve: T,
    timeout: number,
): Promise<T> {
    return new Promise((resolve) => {
        globalThis.setTimeout(() => resolve(valueToResolve), timeout);
    });
}
