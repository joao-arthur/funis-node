export function range(min: number, max: number) {
    const length = Math.max(max - min + 1, 0);

    return Array(length)
        .fill(undefined)
        .map((_, i) => i + min);
}
