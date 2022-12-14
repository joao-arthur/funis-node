export function resolveTimeout<T>(
    valueToResolve: T,
    timeout: number,
): Promise<T> {
    return new Promise(resolve => {
        globalThis.setTimeout(() => resolve(valueToResolve), timeout);
    });
}
