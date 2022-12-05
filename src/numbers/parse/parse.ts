type parseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

export function parse(value: string, options: parseOptions): number | undefined {
    if ('prefix' in options && value.indexOf(options.prefix) === -1)
        return undefined;
    if ('suffix' in options && value.indexOf(options.suffix) === -1)
        return undefined;
    const startIndex = 'prefix' in options ? value.indexOf(options.prefix) + options.prefix.length : 0;
    const endIndex = 'suffix' in options ? value.indexOf(options.suffix) : value.length;
    const parsed = Number(value.slice(startIndex, endIndex));

    return !Number.isNaN(parsed) ? parsed : undefined;
}
