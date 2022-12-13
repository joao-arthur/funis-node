export function sort<T>(arr: readonly T[]): readonly T[] {
    return ([] as T[]).concat(arr).sort();
}
