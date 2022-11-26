export function first<T>(arr: readonly T[]): T | undefined {
    if (!arr.length)
        return undefined;
    return arr[0];
}
