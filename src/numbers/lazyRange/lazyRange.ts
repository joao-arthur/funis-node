export function lazyRange(
    from: number,
    to: number,
    step = 1,
): IterableIterator<number> {
    const delta = Number((to - from).toFixed(10));
    const deltaByStep = Number((delta / step).toFixed(10));
    const length = Math.floor(deltaByStep) + 1;
    const treatedLength = Math.max(length, 0);

    let i = -1;

    return {
        // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        next() {
            i++;

            return {
                done: i + 1 >= treatedLength,
                value: i * step + from,
            };
        },
        // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        [Symbol.iterator]() {
            return this;
        },
    };
}
