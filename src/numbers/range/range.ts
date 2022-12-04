export function range(min: number, max: number, step = 1): readonly number[] {
    const delta = Number((max - min).toFixed(10));
    const deltaByStep = Number((delta / step).toFixed(10));
    const length = Math.floor(deltaByStep) + 1;
    const treatedLength = Math.max(length, 0);

    return Array(treatedLength)
        .fill(undefined)
        .map((_, i) => (i * step) + min)
        .map(value => Number(value.toFixed(10)));
}
