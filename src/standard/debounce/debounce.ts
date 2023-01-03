export function debounce(
    cb: () => unknown,
    timeout: number,
): () => void {
    let timeoutId = 0;

    function closure(): void {
        if (timeoutId)
            globalThis.clearTimeout(timeoutId);
        timeoutId = globalThis.setTimeout(() => {
            timeoutId = 0;
            cb();
        }, timeout);
    }

    return closure;
}
