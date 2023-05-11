/**
 * # pascalCase
 *
 * Transforms a sequence of words into pascal case.
 *
 * ## Example
 *
 * ```ts
 * str.pascalCase('hey') // 'Hey'
 * str.pascalCase('j S o N') // 'JSON'
 * str.pascalCase('j_S_o_N') // 'JSON'
 * str.pascalCase('j-S-o-N') // 'JSON'
 * ```
 */
export function pascalCase(str: string): string {
    if (str === "") {
        return "";
    }
    return str
        .split(/ |_|-/g)
        .map((word) =>
            word[0].toLocaleUpperCase() +
            word.slice(1).toLocaleLowerCase()
        )
        .join("");
}
