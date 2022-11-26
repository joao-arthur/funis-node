export function last<T>(arr: readonly T[]): T | undefined {
    if (!arr.length)
        return undefined;
    return arr[arr.length - 1];
}
