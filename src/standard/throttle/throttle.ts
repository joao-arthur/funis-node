export function throttle(
    cb: () => unknown,
    timeout: number,
): () => void {
    let inThrottleTimeout = false;

    function closure(): void {
        if (inThrottleTimeout)
            return;
        inThrottleTimeout = true;
        globalThis.setTimeout(() => {
            inThrottleTimeout = false;
            cb();
        }, timeout);
    }

    return closure;
}
