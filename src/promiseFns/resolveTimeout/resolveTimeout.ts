export function resolveTimeout(timeout: number): Promise<void> {
    return new Promise(resolve => {
        globalThis.setTimeout(resolve, timeout);
    });
}
