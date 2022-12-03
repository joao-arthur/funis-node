export function rejectTimeout<T>(valueToReject: T, timeout: number): Promise<T> {
    return new Promise((_, reject) => {
        globalThis.setTimeout(() => reject(valueToReject), timeout);
    });
}
