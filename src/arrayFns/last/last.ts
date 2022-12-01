export function last<T>(arr: readonly T[]): T | undefined {
    return arr[arr.length - 1];
}
