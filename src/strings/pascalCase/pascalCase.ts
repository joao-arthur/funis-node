/**
 * # strings.pascalCase
 *
 * Transforms a sequence of words into pascal case.
 *
 * ## Example
 *
 * ```ts
 * strings.pascalCase('hey') // 'Hey'
 * strings.pascalCase('j S o N') // 'JSON'
 * strings.pascalCase('j_S_o_N') // 'JSON'
 * strings.pascalCase('j-S-o-N') // 'JSON'
 * ```
 */
export function pascalCase(str: string): string {
    if (str === "") {
        return "";
    }

    return str
        .split(/ |_|-/g)
        .map((word) =>
            // eslint-disable-next-line max-len
            word[0].toLocaleUpperCase() +
            word.slice(1).toLocaleLowerCase()
        )
        .join("");
}
