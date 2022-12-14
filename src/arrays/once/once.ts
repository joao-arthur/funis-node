export function once<T>(
    arr: readonly T[],
    cb: (item: T, index: number, arr: readonly T[]) => boolean,
): boolean {
    return arr.map(cb).filter(Boolean).length === 1;
}
