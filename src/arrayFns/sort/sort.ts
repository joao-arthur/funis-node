export function sort<T>(arr: readonly T[]): T[] {
    return ([] as T[]).concat(arr).sort();
}
