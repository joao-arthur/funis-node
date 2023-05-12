type parseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

/**
 * # parse
 *
 * Try to parse a number by the given prefix and suffix. If the prefix or suffix doesn't match the passed value, returns _undefined_.
 *
 * ## Example
 *
 * ```ts
 * num.parse(
 *     'I see penguins',
 *     { prefix: 'I see ', suffix: 'penguins' }
 * ) // undefined
 * num.parse('US$4', { prefix: 'R$' }) // undefined
 * num.parse('4px', { suffix: 'rem' }) // undefined
 * ```
 *
 * ```ts
 * num.parse('$100.00', { prefix: '$' }) // 100.00
 * num.parse(
 *     'width: 100px',
 *     { prefix: 'width: ', suffix: 'px' }
 * ) // 100
 * ```
 */
export function parse(
    num: string,
    options: parseOptions,
): number | undefined {
    if ("prefix" in options && num.indexOf(options.prefix) === -1) {
        return undefined;
    }
    if ("suffix" in options && num.indexOf(options.suffix) === -1) {
        return undefined;
    }
    const startIndex = "prefix" in options
        ? num.indexOf(options.prefix) + options.prefix.length
        : 0;
    const endIndex = "suffix" in options
        ? num.indexOf(options.suffix)
        : num.length;
    const slice = num.slice(startIndex, endIndex);
    if (slice === "") {
        return undefined;
    }
    const parsed = Number(slice);
    return !Number.isNaN(parsed) ? parsed : undefined;
}
