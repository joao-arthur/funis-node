/**
 * # snakeCase
 *
 * Transforms a sequence of words into snake case.
 *
 * ## Example
 *
 * ```ts
 * str.snakeCase('hey') // 'hey'
 * str.snakeCase('j S o N') // 'j_s_o_n'
 * str.snakeCase('j_S_o_N') // 'j_s_o_n'
 * str.snakeCase('j-S-o-N') // 'j_s_o_n'
 * ```
 */
export function snakeCase(str: string): string {
    return str
        .split(/ |_|-/g)
        .map((word) => word.toLocaleLowerCase())
        .join("_");
}
