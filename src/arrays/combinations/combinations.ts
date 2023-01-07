export function combinations<T>(
    arr: readonly T[],
): readonly (readonly [T, T])[] {
    const result: [T, T][] = [];
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)
            result.push([arr[i], arr[j]]);

    return result;
}
