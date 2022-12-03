export function rejectTimeout(timeout: number): Promise<void> {
    return new Promise((_, reject) => {
        globalThis.setTimeout(reject, timeout);
    });
}
