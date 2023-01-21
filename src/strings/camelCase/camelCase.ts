/**
 * # strings.camelCase
 *
 * Transforms a sequence of words into camel case.
 *
 * ## Example
 *
 * ```ts
 * strings.camelCase('hey') // 'hey'
 * strings.camelCase('j S o N') // 'jSON'
 * strings.camelCase('j_S_o_N') // 'jSON'
 * strings.camelCase('j-S-o-N') // 'jSON'
 * ```
 */
export function camelCase(str: string): string {
    if (str === '') 
        return '';

    return str
        .split(/ |_|-/g)
        .map((word, index) =>
            index > 0
                // eslint-disable-next-line max-len
                ? word[0].toLocaleUpperCase() +
                    word.slice(1).toLocaleLowerCase()
                : word.toLocaleLowerCase(),
        )
        .join('');
}
