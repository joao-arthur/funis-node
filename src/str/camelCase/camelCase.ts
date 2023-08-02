/**
 * # camelCase
 *
 * Transforms a sequence of words into camel case.
 *
 * ## Example
 *
 * ```ts
 * str.camelCase('hey') // 'hey'
 * str.camelCase('j S o N') // 'jSON'
 * str.camelCase('j_S_o_N') // 'jSON'
 * str.camelCase('j-S-o-N') // 'jSON'
 * ```
 */
export function camelCase(str: string): string {
    if (str === "") {
        return "";
    }
    return str
        .split(/ |_|-/g)
        .map((word, index) =>
            index > 0
                ? word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
                : word.toLocaleLowerCase()
        )
        .join("");
}
