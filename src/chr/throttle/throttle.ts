/**
 * # throttle
 *
 * Returns a function that executes the callback after the timeout.
 *
 * Whenever the returned function is called during the timeout period, the function call is ignored.
 *
 * ## Example
 *
 * ```ts
 * const strArr: string[] = [];
 * chr.throttle(() => strArr.push('Salvator mundi'), 0)();
 * // after 5 ms
 * strArr // ['Salvator mundi']
 * ```
 *
 * ```ts
 * const strArr: string[] = [];
 * const returnedFn = chr.throttle(() => strArr.push('Salvator mundi'), 5);
 * returnedFn();
 * returnedFn();
 * returnedFn();
 * // after 10 ms
 * strArr // ['Salvator mundi']
 * ```
 */
export function throttle(
    cb: () => unknown,
    timeout: number,
): () => number {
    let inThrottleTimeout = false;
    let timeoutId = 0;
    function closure(): number {
        if (inThrottleTimeout) {
            return timeoutId;
        }
        inThrottleTimeout = true;
        timeoutId = globalThis.setTimeout(() => {
            inThrottleTimeout = false;
            cb();
        }, timeout);
        return timeoutId;
    }
    return closure;
}
