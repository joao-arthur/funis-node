type parseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

export function parse(
    num: string,
    options: parseOptions,
): number | undefined {
    if ('prefix' in options && num.indexOf(options.prefix) === -1)
        return undefined;
    if ('suffix' in options && num.indexOf(options.suffix) === -1)
        return undefined;
    const startIndex = 'prefix' in options
        ? num.indexOf(options.prefix) + options.prefix.length
        : 0;
    const endIndex = 'suffix' in options
        ? num.indexOf(options.suffix)
        : num.length;
    const slice = num.slice(startIndex, endIndex);
    if (slice === '')
        return undefined;
    const parsed = Number(slice);

    return !Number.isNaN(parsed) ? parsed : undefined;
}
