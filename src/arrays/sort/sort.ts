export function sort<T>(
    arr: readonly T[],
    compareFn?: (a: T, b: T) => number,
): readonly T[] {
    return ([] as T[]).concat(arr).sort(compareFn);
}
